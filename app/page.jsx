import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
      <div className={styles.description}>
        <h2>SEKINA SHERIF</h2>
      </div>
      <div className={styles.navLinks}>
        <Link href='#about'><span>#</span>about</Link>
        <Link  href='#contacts'><span>#</span>skills</Link>
        <Link  href='#projects'><span>#</span>projects</Link>
        <Link  href='#contacts'><span>#</span>contacts</Link>
      </div>
      </nav>

      <div className={styles.about }>
        <div className={styles.aboutText}>
          <h1>Sekina Sherif is a <span>front end developer</span> and <span> graphics designer</span></h1>
          <br />
          <p>She makes <span>Creative</span> and a <span>Responsive</span> websites which addresses your needs :) </p>
        </div>
        <div>

        <Image
          className={styles.logo}
          src="/profile1.jpeg"
          alt="Profile Picture"
          width={400}
          height={500}
          priority
        />
          <div className={styles.dot}>
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
          </div>

        </div>
      </div>

    <div className={styles.quote}>
        <span className={styles.top}>&quot</span>
      <h2>If you think you it is simple, then you have misunderstood the problem</h2>
      <p>Bjarne Stroustrup</p>

    </div>
      <div id="skills" className={styles.skills}>
        <div className={styles.skillsTxt}>
          <h2><span>#</span>skills</h2>
           <hr />
        </div>
      <div className='' style={{display:'flex', flexDirection:'row'}}> 
        <div className={styles.shapes}>
          <div className={styles.triangles}>
            <div className={styles.triangleDown}></div>
            <div className={styles.triangleRight}></div>
            <div className={styles.triangleLeft}></div>
            <div className={styles.triangleUp}></div>
          </div>
        <div className={styles.dot2}>
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
            <span>&#183;</span>  <span>&#183;</span> <span>&#183;</span> <span>&#183;</span> <span>&#183;</span>
            <br />
          </div>
        </div>
          <div className={styles.grid}>
            
      
          
                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"

                  >
                    <h2>
                      React.js
                    </h2>
                    <Image
                    style={{background:"black"}}
                    src="/react.png"
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    
                    rel="noopener noreferrer"
                  >
                    <h2>
                      Next.js 
                    </h2>
                    <Image
                    style={{background:"white", padding: "3px"}}
                    src="/next.png"
                    alt="Profile Picture"
                    width={100}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      Figma 
                    </h2>
                    <Image
                    
                    src="/figma.png"
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      Adobe Photoshop 
                    </h2>
                    <Image
                    
                    src="/photoshop.png"
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      Firebase 
                    </h2>
                    <Image
                    
                    src="/firebase.png"
                    alt="Profile Picture"
                    width={100}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      React-Native 
                    </h2>
                    <Image
                    
                    src="/reactnative.png"
                    alt="Profile Picture"
                    width={75}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      Typescript 
                    </h2>
                    <Image
                    
                    src="/ts.png"
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      JavaScript 
                    </h2>
                    <Image
                    
                    src="/js.png"
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      C++ 
                    </h2>
                    <Image
                    
                    src="/cplusplus.png"
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      Python 
                    </h2>
                    <Image
                    
                    src="/python.png"
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      HTML & CSS 
                    </h2>
                    <Image
                    
                    src="/htmlcss.png"
                    alt="Profile Picture"
                    width={75}
                    height={50}
                    priority
                  />
                  </a>

                  <a
                    href="/"
                    className={styles.card}
                    rel="noopener noreferrer"
                  >
                    <h2>
                      Bootstrap 
                    </h2>
                    <Image
                    style={{background:"black"}}
                    src="/bootstrap.png"
                    alt="Profile Picture"
                    width={50}
                    height={50}
                    priority
                  />
                  </a>
        
          
          </div>
      </div>  
      

      <div id="contacts" className={styles.contacts}>
          <div className={styles.skillsTxt}>
              <h2><span>#</span>contacts</h2>
              <hr />
          </div>

          <h2><span><a href="https://github.com/Dazzlin-32">Github</a></span></h2>
          <h2><span><a href="https://www.figma.com/@sekinahussein">Figma</a></span></h2>
          <h2><span><a href="https://www.linkedin.com/in/sekina-hussein/">LinkedIn</a></span></h2>
          <h2><span><a href="https://medium.com/@sekinas64"></a>Medium</span></h2>
      </div>

      </div>
    </main>
  )
}
