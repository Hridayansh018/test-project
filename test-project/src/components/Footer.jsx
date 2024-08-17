import { SOCIAL_MEDIA_LINKS } from "../constants"


const Footer=() => {
 return(
   <div className="mb-8 mt-20">
    <div className="flex items-center justify-center gap-8">
      {SOCIAL_MEDIA_LINKS.map((social, index) => (
        <a href={social.href} key={index} target="_blank" rel="noreferrer">
          {social.icon}
        </a>
      ))}
    </div>
    <p className="mt-8 text-center text-neutral-400 tracking-tighter">
      &copy;compileTab. All rights reserved.
    </p>
   </div>
 )
}

export default Footer