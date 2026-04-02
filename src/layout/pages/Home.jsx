export const Home =()=>{
  return(
    <>
<section >
  <div className="py-8 px-20  flex flex-col gap-4  items-start text-secondary-300 ">
  <h1 className="text-4xl"><span className="text-main-400">Bienvenue sur </span> <span>Bee</span><span className="text-main-400">Productive</span></h1>

  <h2 className="text-2xl text-main-400 ">Le site pour booster ta productivité </h2></div>
  <div className="py-12 px-44  flex flex-col gap-4  items-center text-secondary-300 ">
  <img
              className="h-70"
              src="/images/beehome2.svg"
              alt="Une abeille joyeuse"
            /> 
            <button className="btn">Demander de l'aide à Bee</button></div>
         
  
</section>

    </>
  )
}