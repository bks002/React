import React from "react";
import { Link } from "react-router-dom";

export default function Home()
{
    return(
        <main class="bg-facets">
  <div className="container mx-auto px-8">
    <div className="lg:flex">
      <div className="lg:w-5/12 xl:w-4/12 ">
        <div className="lg:flex lg:flex-col lg:h-full lg:justify-center">
          
          <h1 className="text-center text-3xl lg:text-left lg:text-4xl text-charcoal font-bold leading-tight pt-8 lg:pt-0">            
            <span >
              Less stress when sharing expenses
              <span className="text-purple"> with housemates.</span>
            </span>
          </h1>

          <div className="lg:block">
            <p className="text-lg my-6 max-w-xs">
              Keep track of your shared expenses and balances with housemates, trips, groups, friends, and family.
            </p>
            <Link to="SignUpPage" className="animate-slow font-mont inline-block text-white rounded shadow px-16 py-4 bg-purple" >Sign up</Link>

            <p className="mt-8 text-charcoal text-sm flex h-4 items-center">
              Free for iPhone, Android and web.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
    )
}