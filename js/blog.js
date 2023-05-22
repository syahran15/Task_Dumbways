let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-project-name").value;
  let startDate = new Date(document.getElementById("input-start-date").value);
  let endDate = new Date(document.getElementById("input-end-date").value);
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-blog-image").files;

  // fitur durasi

  let start = new Date(startDate);
  let end = new Date(endDate);
  let diff = end.getTime() - start.getTime();
  let duration = Math.ceil(diff / (1000 * 3600 * 24 * 30));

  //untuk menampilkan gambar
  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    projectName,
    duration,
    description,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog()
}

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
              <p class="card-duration">Durasi : ${dataBlog[index].duration} hari </p>
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
            </div>
          </div>
    `;
  }
}
