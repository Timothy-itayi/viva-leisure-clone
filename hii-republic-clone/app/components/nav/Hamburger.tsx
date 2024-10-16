const Hamburger = () => {
    return(
        <div>
        <button className="group h-20 w-20 rounded-lg">
	<div className="grid justify-items-center gap-1.5">
    <span className="h-1 w-8 rounded-full bg-white transition group-hover:rotate-45 group-hover:translate-y-2.5">/</span>
    <span className="h-1 w-8 rounded-full bg-white group-hover:scale-x-0 transition">/</span>
    <span className="h-1 w-8 rounded-full bg-white group-hover:-rotate-45 group-hover:-translate-y-2.5">/</span>
  </div>
</button>
</div>
    )
}
 export default Hamburger;