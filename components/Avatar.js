function Avatar({url, className}) {
    return (
        <img 
          loading="lazy" 
          className={`h-10 rounded-full 
          cursor-pointer transition duration-150 
          transform hover:scale-110 ${className}`}
          src={`https://avatars.githubusercontent.com/u/61899261?v=4`}
          alt="profile_pic"
        />
    )
}

export default Avatar;
