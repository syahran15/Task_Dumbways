// step:
// - making class
// - making object
// - called it so it appears in browser using loop and innerHTML
// - refactor the code so it implements inheritance AuthorTestimonial
// - refactor the code so it implements polymorphism by making class CompanyTestimonial and override get author(the key point is polymorhp implement and override)
// - refactor the code so it implements abstraction by making get testimonialHTML and get author throw error when the children didn't use it
// - refactor the code so it implements encapsulation, use setter and getter (key point is, encapsulation try to make app more secure by implementing restriction)

// Superclass
// class Testimonial {
//   #quote = "";
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }

//   get image() {
//     return this.#image;
//   }

// // This is an abstract method that subclasses will implement
//   get author() {
//     throw new Error("getAuthor() method must be implemented");
//   }

// // This is a polymorphic method that can take any subclasses of Testimonial
//   get testimonialHTML() {
//     return `<div class="testimonial">
//                 <img
//                     src="${this.image}"
//                     class="profile-testimonial"
//                 />
//                 <p class="quote">${this.quote}</p>
//                 <p class="author">- ${this.author}</p>
//             </div>
//         `;
//   }
// }

// Subclass
// class AuthorTestimonials extends Testimonial {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// Subclass
// class CompanyTestimonials extends Testimonial {
//   #company = "";

//   constructor(company, quote, image) {
//     super(quote, image);
//     this.#company = company;
//   }

//   get author() {
//     return this.#company + " Company";
//   }
// }

// const testimonial1 = new AuthorTestimonials(
//   "Abel Dustin",
//   "Jagalah Kebersihan",
//   "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );
// const testimonial2 = new AuthorTestimonials(
//   "Cintara Surya",
//   "Keren cuys!!",
//   "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );
// const testimonial3 = new CompanyTestimonials(
//   "Toyota",
//   "Desain Yang Mantap!! 🔥🔥🔥",
//   "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
// );

// let testimonialData = [testimonial1, testimonial2, testimonial3];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;

const testimonialData = [
  {
    author: "Mr Bayu",
    quote: "Masya Allah keren abis pokoknya",
    image:
      "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    rating: 5,
  },
  {
    author: "Mr Abil",
    quote: "Gookilll , tetap smeangat",
    image:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    rating: 5,
  },
  {
    author: "Mr Junaidi",
    quote: "Recommend banget sih",
    image:
      "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    rating: 4,
  },
  {
    author: "Syahran",
    quote: "Semoga Istiqamah Bro",
    image:
      "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80",
    rating: 3,
  },
  {
    author: "Ubaid",
    quote: "Santai dulu aja sih hehe",
    image:
      "https://plus.unsplash.com/premium_photo-1664456329714-0ff4ed8884a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    rating: 2,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach((item) => {
    testimonialHTML += `<div class="testimonial">
                            <img
                                src="${item.image}"
                                class="profile-testimonial"
                            />
                            <p class="quote">${item.quote}</p>
                            <p class="author">- ${item.author}</p>
                            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                        </div>
            `;
  });
  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter((item) => {
    return item.rating === rating;
  });

  // console.log(testimonialFiltered);


  //if rating = 0
  if(testimonialFiltered.length === 0) {
    testimonialHTML += `<h1> Data Not Found </h1>`;
  } else {
    testimonialFiltered.forEach((item) => {
      testimonialHTML +=  `<div class="testimonial">
                              <img
                                  src="${item.image}"
                                  class="profile-testimonial"
                              />
                              <p class="quote">${item.quote}</p>
                              <p class="author">- ${item.author}</p>
                              <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                          </div>
                    `;
    })
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

