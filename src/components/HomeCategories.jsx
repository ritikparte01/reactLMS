import React from 'react'
import cardImg from "../assets/Vector.png"


const HomeCategories = () => {
  return (
    <>
    <div className='cat_header flex m-auto columns-10 justify-between container mt-20 max-w-7xl'>
    <div className="cat_head_left">
        <h3 className='text-xl font-bold'>Top Categories</h3>
        <p>Explore our Popular Categories</p>
    </div>
    <div className="cat_right">
    <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">All categories</button>
    </div>
    </div>

    <div className='container m-auto mt-16 cards_grid max-w-7xl'>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
        <div className='cat_cards'>
            <img src={cardImg} alt="" />
            <h3>Art & Design</h3>
            <p>38 Courses</p>
        </div>
    </div>
    </>
  )
}

export default HomeCategories