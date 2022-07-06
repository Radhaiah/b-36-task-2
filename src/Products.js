import React from 'react'

const Products = () => {
  // creating the data
  const product=[
    {
      title:"Fancy Product",
      price:`${40.00}-${80.00}`,
      button:"View Options",
      image:"https://img.freepik.com/free-photo/woman-black-trousers-purple-blouse-laughs-leaning-stand-with-elegant-clothes-pink-background_197531-17614.jpg?w=2000",
      rating:"*"
    },
    {
      title:"Special Item",
      price:`${40.00}-${80.00}`,
      button:"Add to cart",
      image:"https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?size=626&ext=jpg",
      rating: "**"
    },
    {
      title:"Sale Item",
      price:`${40.00}-${80.00}`,
      button:"Add to cart",
      image:"https://media.istockphoto.com/photos/smiling-girl-in-trendy-clothes-posing-at-studio-picture-id1033090858?k=20&m=1033090858&s=612x612&w=0&h=LIH4YdQiZeTBBcIBP7zmIDvOXPx8ipEsOIkdwkNoBmg=",
      rating:"*****"
    },
    {
      title:"popular Item",
      price:`${40.00}-${80.00}`,
      button:"Add to cart",
      image:"https://media1.popsugar-assets.com/files/thumbor/BHt8NB8NBDZpk9DxKKTmQrWaThA/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2016/06/09/719/n/1922564/0aca774f_edit_img_image_34872189_1465477200_thumb/i/Fashion-Girl-Style-Tips.jpg",
      rating: "-"

    },
    {
      title:"Sale Item",
      price:`${40.00}-${80.00}`,
      button:"View Options",
      image:"https://img.freepik.com/free-photo/fashion-model-outdoor-portrait-tourist-woman-enjoying-sightseeing-lviv-girl-looking-ancient-atchitecture_106029-855.jpg?w=2000",
      rating:"*****"
    },
    {
      title:"Fancy Product",
      price:`${40.00}-${80.00}`,
      button:"Add to cart",
      image:"https://cdn.cliqueinc.com/posts/277191/fashion-airport-outfits-277191-1549660391077-promo.700x0c.jpg",
      rating: "***"
    },
    {
      title:"Special Item",
      price:`${40.00}-${80.00}`,
      button:"Add to cart",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZ22nTihtRxVREb5GdwAE73RqPQEEllbliQ&usqp=CAU",
      rating:"-"
    },
    {
      title:"Popular Item",
      price:`${40.00}-${80.00}`,
      button:"Add to cart",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWpSiJh3oLCbJyPQxjQHsPxsnW6JtXlcqhw&usqp=CAU",
      rating: "***"

    }
  ]
  return (
    <section className="pricing py-5">
    <div className="container bg-dark p-2">
      <div className="row">{
        /* maping each item to card */
        product.map((value,index)=>{
          return <div className="col-lg-3 mb-2" key={index}>
            <div className="card ">
              <div className="card body bg-light" ><div className="position-relative">
              <span class="badge badge-secondary">sale</span></div>
              <img src={value.image} className="rounded" alt="" height="300" width="263"/>
                <h2 className="card-title text-uppercase text-center">{value.title}</h2>
                  <h6 className="card-price text-center">${value.price}</h6>
                  <h6>{value.rating}</h6>
                  <div>
                    <button className="btn btn-light" >{value.button}</button>
                  </div>
      </div>
  </div>

  </div>
        })}
      </div>
    </div>
  </section>
  
    
  )
}

export default Products