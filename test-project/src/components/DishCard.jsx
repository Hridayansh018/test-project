

const DishCard = ({project}) => {
  return(
    <div>
      <img src={project.image}
        alt={project.title}
        className="rounded-3xl p-2" />
      <div className="px-3">
        <h3 className="font-bold mb-2 text-2xl tracking-tighter">{project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>

  )
  }

  export default DishCard