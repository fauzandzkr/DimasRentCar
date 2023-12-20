
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px"; // Adjust this value based on your navbar height
    }

    prevScrollPos = currentScrollPos;
};



let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#d7d7d7ab  ${scrollValue}%, #2f32437c  ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

let scrollProgress = document.getElementById("progress");
let progressValue = document.getElementById("progress-value");
        const showPopup      = document.querySelector('.show-popup');
        const popupContainer = document.querySelector('.popup-container');
        const closeBtn       = document.querySelector('.close-btn');

        const showFilter    = document.querySelector('.show-filter');
        const containerFilter = document.querySelector('.container-filter');
        const closeFilter = document.querySelector('.close-filter')
        const closeCancel = document.querySelector('.close-cancel');

        const homeVehicleBtn = document.querySelector('.home-vehicle-button');
        const showMotor      = document.querySelector('.show-motor');
        const beranda        = document.querySelector('.beranda');
        const tentang        = document.querySelector('.tentang');
        const kendaraan      = document.querySelector('.kendaraan');
        const pemesanan      = document.querySelector('.pemesanan');
        const syarat         = document.querySelector('.syarat');

        showFilter.onclick = () => {
            containerFilter.classList.add('active');
            document.body.classList.add('no-scroll');
            scrollProgress.classList.add('noscrolltop');
            progressValue.classList.add('noscrolltop');
            // containerFilter.onclick = () => {
            //     containerFilter.classList.remove('active');
            //     document.body.classList.remove('no-scroll');
            // }    
        }
        closeFilter.onclick = () => {
            containerFilter.classList.remove('active');
            document.body.classList.remove('no-scroll');
            scrollProgress.classList.remove('noscrolltop');
            progressValue.classList.remove('noscrolltop');
        }
        closeCancel.onclick = () => {
            containerFilter.classList.remove('active');
            document.body.classList.remove('no-scroll');
            scrollProgress.classList.remove('noscrolltop');
            progressValue.classList.remove('noscrolltop');
        }

        showPopup.onclick = () => {
            popupContainer.classList.add('active');
            document.body.classList.add('no-scroll');
            popupContainer.onclick = () => {
                popupContainer.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        }
        closeBtn.onclick = () => {
            popupContainer.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
        homeVehicleBtn.onclick = () => {
            const homeVehicleBtnElemet = document.querySelector('.vehicle');
            homeVehicleBtnElemet.scrollIntoView({behavior: 'smooth'});
        }
        showMotor.onclick = () => {
            const showMotorElement = document.querySelector('.motor-page');
            showMotorElement.scrollIntoView({behavior: "smooth"});
        }
        beranda.onclick = () => {
            popupContainer.classList.remove('active');
            // Scroll to the element with the class 'beranda'
            const berandaElement = document.querySelector('.home');
            if (berandaElement) {
                berandaElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        tentang.onclick = () => {
            popupContainer.classList.remove('active');
            // Scroll to the element with the class 'beranda'
            const aboutElement = document.querySelector('.about');
            if (aboutElement) {
                aboutElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        kendaraan.onclick = () => {
            popupContainer.classList.remove('active');
            // Scroll to the element with the class 'beranda'
            const vehicleElement = document.querySelector('.vehicle');
            if (vehicleElement) {
                vehicleElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        pemesanan.onclick = () => {
            popupContainer.classList.remove('active');
            // Scroll to the element with the class 'beranda'
            const orderElement = document.querySelector('.order');
            if (orderElement) {
                orderElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
        syarat.onclick = () => {
            popupContainer.classList.remove('active');
            // Scroll to the element with the class 'beranda'
            const tncElement = document.querySelector('.tnc');
            if (tncElement) {
                tncElement.scrollIntoView({ behavior: 'smooth' });
            }
        }



        document.addEventListener("DOMContentLoaded", function () {
    const filterForm = document.getElementById("filterForm");
    const vehicleList = document.getElementById("vehicleList");

    const vehicles = [
        { brand: "Daihatsu", type: "LCGC", transmission:"Manual",    model: "Ayla", year: 2022, price: "Rp300k/hari", image: "assets/img/car-daihatsu-ayla.png"},
        { brand: "Daihatsu", type: "LCGC", transmission:"Automatic", model: "Ayla", year: 2022, price: "Rp350k/hari", image: "assets/img/car-daihatsu-ayla.png"},
        { brand: "Daihatsu", type: "MPV", transmission:"Manual",    model: "Sigra", year: 2022, price: "Rp300k/hari", image: "assets/img/car-daihatsu-sigra.png"},
        { brand: "Daihatsu", type: "MPV", transmission:"Automatic", model: "Sigra", year: 2022, price: "Rp350k/hari", image: "assets/img/car-daihatsu-sigra.png" },
        { brand: "Daihatsu", type: "SUV", transmission:"Manual",    model: "Terios", year: 2022, price: "Rp400k/hari", image: "assets/img/car-daihatsu-terios.png"},
        { brand: "Daihatsu", type: "SUV", transmission:"Automatic", model: "Terios", year: 2022, price: "Rp450k/hari", image: "assets/img/car-daihatsu-terios.png"},
        { brand: "Daihatsu", type: "MPV", transmission: "Manual",    model: "Xenia", year: 2022, price: "Rp300k/hari", image: "assets/img/car-daihatsu-xenia.png"},
        { brand: "Daihatsu", type: "MPV", transmission: "Automatic",    model: "Xenia", year: 2022, price: "Rp350k/hari", image: "assets/img/car-daihatsu-xenia.png"},
        
        { brand: "Honda", type: "Hatchback", transmission: "Manual", model: "Brio", year: 2022, price: "Rp300k/hari", image: "assets/img/car-honda-brio.png"},
        { brand: "Honda", type: "Hatchback", transmission: "Automatic", model: "Brio", year: 2022, price: "Rp350k/hari", image: "assets/img/car-honda-brio.png"},
        { brand: "Honda", type: "Hatchback", transmission: "Manual", model: "Jazz", year: 2022, price: "Rp400k/hari", image: "assets/img/car-honda-jazz.png"},
        { brand: "Honda", type: "Hatchback", transmission: "Automatic", model: "Jazz", year: 2022, price: "Rp450k/hari", image: "assets/img/car-honda-jazz.png"},
        { brand: "Honda", type: "MPV", transmission: "Manual", model: "Mobilio", year: 2022, price: "Rp300k/hari", image: "assets/img/car-honda-mobilio.png"},
        { brand: "Honda", type: "MPV", transmission: "Automatic", model: "Mobilio", year: 2022, price: "Rp350k/hari", image: "assets/img/car-honda-mobilio.png"},
        
        { brand: "Toyota", type: "LCGC", transmission: "Manual", model: "Agya", year: 2022, price: "Rp300k/hari", image: "assets/img/car-toyota-agya.png"},
        { brand: "Toyota", type: "LCGC", transmission: "Automatic", model: "Agya", year: 2022, price: "Rp350k/hari", image: "assets/img/car-toyota-agya.png"},
        { brand: "Toyota", type: "MPV", transmission: "Manual", model: "Avanza", year: 2022, price: "Rp300k/hari", image: "assets/img/car-toyota-avanza.png"},
        { brand: "Toyota", type: "MPV", transmission: "Automatic", model: "Avanza", year: 2022, price: "Rp350k/hari", image: "assets/img/car-toyota-avanza.png"},
        { brand: "Toyota", type: "MPV", transmission: "Manual", model: "Calya", year: 2022, price: "Rp300k/hari", image: "assets/img/car-toyota-calya.png"},
        { brand: "Toyota", type: "MPV", transmission: "Automatic", model: "Calya", year: 2022, price: "Rp350k/hari", image: "assets/img/car-toyota-calya.png"},
        { brand: "Toyota", type: "SUV", transmission: "Manual", model: "Rush", year: 2022, price: "Rp400k/hari", image: "assets/img/car-toyota-rush.png"},
        { brand: "Toyota", type: "SUV", transmission: "Automatic", model: "Rush", year: 2022, price: "Rp450k/hari", image: "assets/img/car-toyota-rush.png"},
        { brand: "Toyota", type: "Hatchback", transmission: "Manual", model: "Yaris", year: 2022, price: "Rp400k/hari", image: "assets/img/car-toyota-yaris.png" },
        { brand: "Toyota", type: "Hatchback", transmission: "Automatic", model: "Yaris", year: 2022, price: "Rp450k/hari", image: "assets/img/car-toyota-yaris.png" },
        { brand: "Toyota", type: "MPV", transmission: "-", model: "Innova", year: 2022, price: "Rp750k/hari", image: "assets/img/car-toyota-innova.png"},
        { brand: "Toyota", type: "MPV", transmission: "-", model: "Alphard", year: "-", price: "-", image: "assets/img/car-toyota-alphard.png"},
        { brand: "Toyota", type: "SUV", transmission: "-", model: "Fortuner", year: "-", price: "-", image: "assets/img/car-toyota-fortuner.png"},

        { brand: "Mitsubishi", type: "SUV", transmission: "-", model: "Pajero", year: "-", price: "-", image: "assets/img/car-mitsubishi-pajero.png" },
        // Add other vehicle data as needed
    ];


    // Show all vehicles initially
    showFilteredVehicles(vehicles);

    // Handling "Select All" options for checkboxes
    document.getElementById("selectAllCarBrand").addEventListener("change", function () {
        const carBrandCheckboxes = document.querySelectorAll('[name="carBrand"]');
        carBrandCheckboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });

        // Uncheck other options
        if (!this.checked) {
            uncheckOtherOptions("carBrand", this);
        }
    });

    document.getElementById("selectAllCarType").addEventListener("change", function () {
        const carTypeCheckboxes = document.querySelectorAll('[name="carType"]');
        carTypeCheckboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });

        // Uncheck other options
        if (!this.checked) {
            uncheckOtherOptions("carType", this);
        }
    });

    document.getElementById("selectAllTransmission").addEventListener("change", function () {
        const transmissionCheckboxes = document.querySelectorAll('[name="transmission"]');
        transmissionCheckboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });

    filterForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const formData = new FormData(filterForm);
        const selectedBrands = formData.getAll("carBrand");
        const selectedCarTypes = formData.getAll("carType");
        const selectedTransmission = formData.getAll("transmission");

        const filteredVehicles = vehicles.filter((vehicle) => {
            return (
                (selectedBrands.length === 0 || selectedBrands.includes(vehicle.brand)) &&
                (selectedCarTypes.length === 0 || selectedCarTypes.includes(vehicle.type)) &&
                (selectedTransmission.length === 0 || selectedTransmission.includes(vehicle.transmission))
            );
        });

        showFilteredVehicles(filteredVehicles);
    });

    function showFilteredVehicles(filteredVehicles) {
        vehicleList.innerHTML = "";

        if (filteredVehicles.length === 0) {
            vehicleList.innerHTML = "<img src='assets/img/not-found.png' class='not-found'>";
            return;
        }

        filteredVehicles.forEach((vehicle) => {
            const vehicleItem = document.createElement("div");
            vehicleItem.classList.add("vehicle-item");
            
            if (vehicle.model === "Pajero" || vehicle.model === "Fortuner" || vehicle.model == "Alphard") {
                vehicleItem.innerHTML = `
                <div class="card-cars-coming-soon">
                    <div class="card-cars-border-coming-soon">  </div>
                    <div class="card-cars-main">
                        <p><img src="${vehicle.image}" class="img-cars-coming-soon"></p>

                        <div class="main-desc-coming-soon">
                            <p class="brand">${vehicle.brand}</p>
                            <p class="model">${vehicle.model}</p>

                            <div class="card-card-three-icon">
                                <div class="tipe">
                                    <img src="assets/icon/icon-cars.png">
                                    ${vehicle.type}
                                </div>
                                <div class="tahun">
                                    <img src="assets/icon/calendar_ffffff.png">
                                    ${vehicle.year}   
                                </div>
                                <div class="transmisi">
                                    <img src="assets/icon/transmisi.png">
                                    ${vehicle.transmission}   
                                </div>
                            </div>
                            
                            <p class="price">${vehicle.price}</p>  
                        </div>
                        
                        <p class="p-booking-coming-soon2">
                            <a  class="booking" href="https://www.iconfinder.com/search?q=calendar">Pesan</a>
                        </p>
                        <p class="p-booking-coming-soon">
                            Segera Tersedia
                        </p>
                    </div>
                </div>
                `;
                
            } 
            else{

            
            vehicleItem.innerHTML = `
                    <div class="card-cars">
                        <div class="card-cars-border">
                            
                        </div>
                        <div class="card-cars-main">
                            <p><img src="${vehicle.image}" class="img-cars"></p>
                            <div class="main-desc">
                                <p class="brand">${vehicle.brand}</p>
                                <p class="model">${vehicle.model}</p>

                                <div class="card-card-three-icon">
                                    <div class="tipe">
                                        <img src="assets/icon/icon-cars.png">
                                        ${vehicle.type}
                                    </div>
                                    <div class="tahun">
                                        <img src="assets/icon/calendar_ffffff.png">
                                        ${vehicle.year}   
                                    </div>
                                    <div class="transmisi">
                                        <img src="assets/icon/transmisi.png">
                                        ${vehicle.transmission}   
                                    </div>
                                </div>
                                <p class="price">${vehicle.price}</p>
                        
                                
                            </div>

                            <p class="p-booking">
                                <a  class="booking" href="https://www.iconfinder.com/search?q=calendar">Pesan</a>
                            </p>
                            
                        </div>
                    </div>
            `;
            }
            vehicleList.appendChild(vehicleItem);
        });
    }

    // Function to uncheck other options in a checkbox group
    function uncheckOtherOptions(groupName, selectedCheckbox) {
        const checkboxes = document.querySelectorAll(`[name="${groupName}"]`);
        checkboxes.forEach(checkbox => {
            if (checkbox !== selectedCheckbox) {
                checkbox.checked = false;
            }
        });
    }
});



const motor = [
            { brand: "Honda", transmission: "Automatic", model: "Beat", year: 2022, price: "Rp120k/hari", image: "assets/img/motor-honda-beat.png"},
            { brand: "Honda", transmission: "Automatic", model: "Pcx", year: 2022, price: "Rp150k/hari", image: "assets/img/motor-honda-pcx.png" },
            { brand: "Honda", transmission: "Automatic", model: "Scoopy", year: 2022, price: "Rp120k/hari", image: "assets/img/motor-honda-scoopy.png" },
            { brand: "Honda", transmission: "Automatic", model: "Vario", year: 2022, price: "Rp120k/hari", image: "assets/img/motor-honda-vario.png" },
            { brand: "Yamaha", transmission: "Automatic", model: "Aerox", year: 2022, price: "Rp150k/hari", image: "assets/img/motor-yamaha-aerox.png" },
            { brand: "Yamaha", transmission: "Automatic", model: "Mio z", year: 2022, price: "Rp120k/hari", image: "assets/img/motor-yamaha-mioz.png" },
            { brand: "Yamaha", transmission: "Automatic", model: "Nmax", year: 2022, price: "Rp150k/hari", image: "assets/img/motor-yamaha-nmax.png" },
            { brand: "Suzuki", transmission: "Automatic", model: "Nex", year: 2022, price: "Rp120k/hari", image: "assets/img/motor-suzuki-nex.png" }
        ];

        const motorList = document.getElementById("motorList");

        motor.forEach((motorItem) => {
            const motorCard = document.createElement("div");
            // motorCard.classList.add("motor-item");
            motorCard.innerHTML = `
                <div class="card-cars">
                    <div class="card-cars-border"></div>
                    <div class="card-cars-main">
                        <p><img src="${motorItem.image}" class="img-cars"></p>
                        <div class="main-desc">
                            <p class="brand">${motorItem.brand}</p>
                            <p class="model">${motorItem.model}</p>
                            <div class="card-card-three-icon">
                                <div class="tahun">
                                    <img src="assets/icon/calendar_ffffff.png">
                                    ${motorItem.year}   
                                </div>
                                <div class="transmisi">
                                    <img src="assets/icon/transmisi.png">
                                    ${motorItem.transmission}   
                                </div>
                            </div>
                            <p class="price">${motorItem.price}</p>
                        </div>
                        <p class="p-booking">
                            <a class="booking" href="https://www.iconfinder.com/search?q=calendar">Pesan</a>
                        </p>
                    </div>
                </div>
            `;
            motorList.appendChild(motorCard);
        });
