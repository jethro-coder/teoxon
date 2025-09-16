import React from 'react'


function index() {
  return (
  <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="Jethropicture" src="/Assets/Heropics/Jethropicture.jpg"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Jethro Villarosa Teoxon</h1>
      <p class="mb-8 leading-relaxed">Hi, I'm Jethro Villarosa Teoxon, a 3rd-year Computer Science student with a passion for technology and software development. I'm currently honing my skills in programming, problem solving, and data structures, and am particularly excited
        about web development and building interactive, user friendly applications.
      </p>
      <div class="flex w-full md:justify-start justify-center items-end">
      </div>
      <div class="flex lg:flex-row md:flex-col">
        <a 
          class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
          href='https://www.facebook.com/profile.php?id=61576737836882'
          target="_blank">My facebook Account
        </a>
        <a 
          class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none"
          href='https://www.instagram.com/jethrovillarosa/'
          target="_blank">My Instagram Account
        </a>
      </div>
    </div>
  </div>
</section>
    
  )
}

export default index