import PropTypes from 'prop-types';

export const CustomButton = ({ link, text }) => {
    return (
       <a href={link}>
              <button className={`text-slate-200 bg-[#285175] hover:bg-slate-200 hover:text-[#285175] py-2 px-4 rounded bg-opacity-100`}>
                {text}
              </button>
       </a>
    )
}

CustomButton.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
