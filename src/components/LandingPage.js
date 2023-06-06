
function LandingPage() {
    return (
      <div className="whiteboard landing" style={{
        backgroundImage: 'url(../assets/bg-signup.jpg)',
        height: "100vh",
        backgroundRepeat: "no-repeat"
      }}>
        <div id="icon">
          <h1 id="morre">CO<span id="big-o">DI</span>NG</h1>
        
        </div>
        <h1 id="yourself">BE SMART</h1>
        <p className="land">
          
Guru Institute, located in the heart of Nairobi, 
Is dedicated to preserving a legacy of equipping individuals with the necessary tools,
 resources, and opportunities to emerge as leaders.
  We provide a supportive and career-driven environment, 
  specifically designed to empower students in achieving their goals and attaining ultimate success. 
  At Guru Institute, we are committed to nurturing your potential and guiding you towards a prosperous future.
        </p>
        <p>
          Signup <a href="/signup" className="arrow">here ➔</a>
        </p>
      </div>
    )
  }
  
  export default LandingPage