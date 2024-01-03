import { CustomButton } from "./button"

export const ProjectItem = ({ img, title, desc }) => {
    return (
       <div className={`w-80 h-80 bg-cover bg-center flex items-center justify-center rounded-lg`} style={{ backgroundImage: `url(${img})` }}>
              <div className="bg-black bg-opacity-75 w-full h-full rounded-lg flex flex-col justify-center items-center text-white text-center opacity-0 hover:opacity-100 space-y-3">
                        <h1 className="text-3xl flex">{title}</h1>
                        <p className="px-6">{desc}</p>
                        <CustomButton link="https://github.com/Jomerjom" text="GitHub"/>
                </div>
        </div>
    )
}
import PropTypes from 'prop-types';

ProjectItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
}
