let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-project-name").value;
  let startDate = new Date(document.getElementById("input-start-date").value);
  let endDate = new Date(document.getElementById("input-end-date").value);
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-blog-image").files;

  // fitur durasi

  let distance = endDate - startDate; // hasilnya milidetik
  console.log(distance);

  let milisecond = 1000; // milisecond
  let secondInHours = 3600; // 1 jam 3600 detik
  let hoursInDays = 24; // 1 hari 24 jam
  let daysInMonth = 30; // 30 hari sebulan
  let monthInYear = 12; // 12 bulan setahun

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceMonth = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays * daysInMonth)
  );
  let distanceYear = Math.floor(
    distance /
      (milisecond * secondInHours * hoursInDays * daysInMonth * monthInYear)
  );

  // menampilkan date
let realDate = "";

if (distanceDay < 31) {
  realDate = `${distanceDay} hari`;
} else if (distanceDay >= 31) {
  realDate = `${distanceMonth} bulan ${distanceDay % 30} hari`;
} else if (distanceMonth >= 12) {
  realDate = `${distanceYear} tahun ${distanceMonth % 12} bulan ${distanceDay % 30} hari`;
} else {
  realDate = "Kamu salah input";
}

console.log(`Durasi: ${realDate}`);

  //untuk menampilkan gambar
  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    projectName,
    realDate,
    description,
    realTime: new Date(),
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

//Card Post

function renderBlog() {
  //untuk menghilangkan post yang pertama
  document.getElementById("contents").innerHTML = "";

  //menambahkan post
  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
          <div class="card-content" >
            <div class="card-content-container">
              <div class="image-container">
                <img src="${dataBlog[index].image}" alt="blog_img" />
              </div>
              <h3 class="card-title">${dataBlog[index].projectName}</h3>
              <p class="card-duration">${dataBlog[index].realDate}</p>
              <br />
              <p class="card-description">
                ${dataBlog[index].description}
              </p>
              <div class="logo-container">
                <i class="fa-brands fa-android"></i>
                <i class="fa-brands fa-java"></i>
                <i class="fa-brands fa-square-js"></i>
              </div>
              <div class="btn-group-card">
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
              </div>
              <div style="float: right; margin: 10px">
              <p style="font-size: 15px; color: grey">${getRealTime(
                dataBlog[index].realTime
              )}</p>
            </div>
            </div>
          </div>
    `;
  }
}

// Membaut

// function getFullTime(time) {
//   let monthName = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Desc",
//   ];

//   let date = time.getDate();
//   let monthIndex = time.getMonth();
//   let year = time.getFullYear();
//   let hours = time.getHours();
//   let minutes = time.getMinutes();

//   if (hours <= 9) {
//     hours = "0" + hours;
//   } else if (minutes <= 9) {
//     minutes = "0" + minutes;
//   }

//   return `${date} ${monthName[monthIndex]} ${year} ${hours} : ${minutes} WIB`;
// }

function getRealTime(time) {
  let timeNow = new Date();
  let timePost = time;

  // waktu sekarang - waktu post
  let realTime = timeNow - timePost; // hasilnya milidetik
  console.log(realTime);

  let milisecond = 1000; // milisecond
  let secondInHours = 3600; // 1 jam 3600 detik
  let hoursInDays = 24; // 1 hari 24 jam

  let realTimeDay = Math.floor(
    realTime / (milisecond * secondInHours * hoursInDays)
  ); // 1/86400000
  let realTimeHours = Math.floor(realTime / (milisecond * 60 * 60)); // 1/3600000
  let realTimeMinutes = Math.floor(realTime / (milisecond * 60)); // 1/60000
  let realTimeSecond = Math.floor(realTime / milisecond); // 1/1000

  if (realTimeDay > 0) {
    return `${realTimeDay} Day Ago`;
  } else if (realTimeHours > 0) {
    return `${realTimeHours} Hours Ago`;
  } else if (realTimeMinutes > 0) {
    return `${realTimeMinutes} Minutes Ago`;
  } else {
    return `${realTimeSecond} Seconds Ago`;
  }
}

setInterval(function () {
  renderBlog();
}, 2000);
