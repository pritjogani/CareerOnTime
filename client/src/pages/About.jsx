import { useAuth } from "../store/auth";

export const About = () =>{
    const {user} = useAuth();
    console.log(user.ishr);
    return <>  
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>welcome {user ?`${user.username}  ${user.ishr}to our website` : `to our website`}</p>
            <h1>why choose us?</h1>
           <p>
            career on time offers a wide range of job opportunities across diverse industries and locations, providing job seekers with access to the most relevant and up-to-date listings. Designed with a user-friendly interface, our platform makes it easy to navigate through thousands of roles, with advanced search filters and application tracking that help users quickly find what they’re looking for. Using cutting-edge algorithms, we also personalize job recommendations, matching users with roles that best fit their skills, experience, and career goals—dramatically improving the chances of finding a fulfilling position.
           </p>
          </div>
          <div><img src="robot.png" alt="" /></div>
        </div>
      </section>
    </main>
    </>
}