import banner from '/images/banner.jpg'

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${banner})`}} className='h-screen bg-cover  '>
            <div >
                <div className='text-5xl font-extrabold  text-left text-[#465739] lg:py-60 px-20 '>
                    <h1>
                    With all our <br /> love for a <br></br>
                <span className='text-yellow-400'>Festive </span>season....</h1>
                <button className=' btn  font-bold text-white bg-[#D3B714] border-[#D3B714] hover:bg-[#D3B714]'>Explore Utshob</button>
                
                </div>
              
            </div>
        </div>
    );
};

export default Banner;