
const Home = () => {
    const hrStyles = {
        borderColor: 'black',
        borderWidth: '1px',
        marginTop:'35px',
        fontWeight: 'bold', // Note: font-weight won't affect hr directly, but it's included for completeness
      };
    return (
        <div className="bg-slate-100 px-48 pt-20">
            <h1 className=" text-5xl font-bold">E-certificate</h1>
            <hr style={hrStyles}/>
            <div className="mt-10">
                <h2 className="text-4xl font-bold">What Sets Apart MGC College E-Certificates?</h2>
                <p className="text-slate-600 font-medium mt-6 me-80">At MGC College, our E-Certificates transcend the conventional. Crafted with meticulous precision, they seamlessly merge tradition with technology, embodying our unwavering commitment to excellence in education. These digital badges of accomplishment are emblematic of your unique achievements and stand as a testament to the exceptional standards upheld by MGC College.</p>
            </div>
            <div className="mt-10">
                <h2 className="text-4xl font-bold">How Can I Obtain My Personalized MGC College E-Certificate?</h2>
                <p className="text-slate-600 font-medium mt-6 me-80">Navigating the path to receiving your digital badge of accomplishment from MGC College is a streamlined process. Following the successful completion of your program or event, an email will grace your inbox. Within it, you’ll find a secure link, inviting you to download your personalized MGC College E-Certificate—a tangible representation of your academic or professional triumph.</p>
            </div>
            <div className="mt-10">
                <h2 className="text-4xl font-bold">Can I Showcase My MGC College E-Certificate on Social Media?</h2>
                <p className="text-slate-600 font-medium mt-6 me-80">Absolutely! Your accomplishments deserve to be celebrated on a global stage. MGC College E-Certificates are meticulously designed for the digital age, allowing you to proudly showcase your achievements on platforms like LinkedIn, Facebook, or any other social network of your choice. Share your success story with the world.</p>
            </div>
            <div className="mt-10">
                <h2 className="text-4xl font-bold">What Security Features Safeguard MGC College E-Certificates?</h2>
                <p className="text-slate-600 font-medium mt-6 me-80">Security is paramount in the digital realm, and MGC College E-Certificates are fortified with advanced features to ensure the integrity and authenticity of your achievements. With robust encryption and digital signatures, your E-Certificate stands as an impenetrable testament to your success.</p>
            </div>
            <div className="mt-10">
                <h2 className="text-4xl font-bold">How Long is My MGC College E-Certificate Valid?</h2>
                <p className="text-slate-600 font-medium mt-6 me-80">Your MGC College E-Certificate is not just a recognition; it’s a perpetual acknowledgment of your achievements. There’s no ticking clock attached—allowing you to cherish, showcase, and reflect on your accomplishments indefinitely.</p>
            </div>
            <div className="mt-10">
                <h2 className="text-4xl font-bold">Is Recognition of MGC College E-Certificates Global?</h2>
                <p className="text-slate-600 font-medium mt-6 me-80">Indeed. MGC College E-Certificates are meticulously crafted for global acknowledgment. We understand the universal nature of your achievements, and our digital credentials are designed to resonate on a global scale. Your success knows no bounds.</p>
            </div>
            <div className="mt-10 pb-32">
                <h2 className="text-4xl font-bold">How Can Others Verify My MGC College E-Certificate?</h2>
                <p className="text-slate-600 font-medium mt-6 me-80">Verification is a seamless process. Each MGC College E-Certificate is accompanied by a secure verification link. This allows third parties to effortlessly confirm the authenticity of your prestigious MGC College credential—adding an extra layer of credibility to your achievements. <br />  <br />Elevate your achievements with MGC College E-Certificates—where tradition meets innovation. Unleash the power of digital recognition on your academic and professional journey!</p>
            </div>
        </div>
    );
};

export default Home;