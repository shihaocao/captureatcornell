import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../components/layout.module.css'
import { img_photo_descrip_block_h2 } from '../../components/img_blocks'

const pathfinder_1_text = <p>
  This initial pathfinder taught me how to build a thurst vectoring actuators, and
  I was also able to test using an EDF as a main power system. I realized that the torque
  delivered from the motor needed significant compensation. Further that an EDF sized system
  was too large and heavy for safe prototyping. This drove me to target a lighter smaller system on the next iteration.
</p>

const pathfinder_2_text = <p>
  On this iteration, I tested using a commercial flight computer the Pixhawk 4, and two counter rotating
  propellers. This also used a similar fin based thrust vectoring system. In the picture below, you'll
  see it hanging from strings as a partial free-hanging system to test roll control. A system I would repeat
  for Lodestar.
</p>

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
      <Head>
        <title>Lodestar</title>
      </Head>
      <h1>Lodestar: An Electric VTOL Rocket</h1>

      <Link href="/builds/builds-landing">
        <a>Back to builds</a>
      </Link>
      <br></br>

      <div className='photo-div'>
        {/* <Image src="/photography/jumping.jpg" alt="me" width="4000" height="600" /> */}
        <img
        src = "/images/lodestar/lodestar.jpg"
        alt = 'Lodestar'
        layout='fill'
        objectFit='contain'
        loading="lazy"
        />
      </div>

      <p>An homage to SpaceX's Starship, Lodestar is a single point thrust vectoring VTOL drone.</p>

      <div style={{margin: 40, textAlign: 'center'}}>
        <a href="https://govindchari1.wixsite.com/portfolio/vtol-rocket" target="_blank" className="card" download><b>Watch it Fly!</b></a>
      </div>

      <p>I worked on this project with Govind Chari! Click&nbsp;
      <a href="https://govindchari1.wixsite.com/portfolio/vtol-rocket" target="_blank" class = "button special small">here</a>
      &nbsp;to checkout his site!</p>
 
      <h2>Introduction</h2>
      <p>Lodestar is a small scale electric vertical takeoff and landing (VTOL capable) project
        that I worked on with Govind Chari over the 2020 Summer. I was in Hawthorne, so I designed
        the craft and wrote the flight software. My partner Govind built and tested the vehicle,
        and also wrote the GNC code. By the end of the summer, the vehicle could perform a
        takeoff and land vertically. The objective was to understand the challenges in creating 
        a vehicle that could take off 
        and land vertically through thrust vectoring only similar to the Falcon 9.
      </p>

      <hr></hr>

      <h2>Years Before</h2>
      
      <p>
        The first attempts at this project actually started back in 2017
        before I had even met Govind. Together with Matthew Cox, and Jude Bedessem,
        we studied how to build a similar system for recovery of high power rockets.

        While they worked on the rocketry side of the project, I lead the way on the
        recovery side with two pathfinder vehicles for an electric motor vertical landing
        system.
      </p>
      <hr></hr>

      {img_photo_descrip_block_h2(
        "Pathfinder 1 - EDF Thrust Vectoring",
        pathfinder_1_text,
        '/images/lodestar/edf-vectoring.jpg',
        'EDF Vectoring')}
      
      {img_photo_descrip_block_h2(
        "Pathfinder 2 - Counter Rotating Props and Active Control",
        pathfinder_1_text,
        '/images/lodestar/counter-rotating.jpg',
        'EDF Vectoring')}

      <h2>Lodestar Design</h2>
        <p>
        Using lessons learned from my past designs, the bill of materials and overall system design (mass budget, power budget...) 
        was very easy to get right on the first try.
          I chose to use two
        counter-rotating quadcopter motors to cancel
        torque and ensure centerline thrust. Roll control
        on the craft is achieved through differential thrust,
        and pitch & yaw is achieved through thrust
        vectoring vanes actuated by servos inside the
        thrust structure. The two motors have separate power systems, and one of them also powers the avionics stack.
        </p>
      <hr></hr>

      <h2>Flight Software and Ground Software</h2>
        <p>
        Flight software on this vehicle was derived from the flight software on PAN (my satellite team). This gave me the
        fine-grained control that I did not have from previous commercial flight computers. I
        wrote all code to parse orientation and position data from the onboard IMU and Barometer. I
        wrote a mission manager state machine that guided the craft through sensor initialization, flight,
        and post-landing. To aid with initial development, I also developed a custom NodeJS-based web
        ground station. I also wrote all the boilerplate code that my partner plugged into for guidance,
        navigation, and control.
        </p>

        <p>Here's the link to the <Link href="https://github.com/shihaocao/lodestar"> GitHub repository</Link> for Lodestar.</p>
        
        <p>Here's a screenshot of what the groundstation looked like as it relayed live telemetry through the radio system.</p>
        <div className='photo-div'>
        {/* <Image src="/photography/jumping.jpg" alt="me" width="4000" height="600" /> */}
        <img
        src = "/images/lodestar/lodestar_gs.jpg"
        alt = 'Lodestar Groundstation'
        layout='fill'
        objectFit='contain'
        loading="lazy"
        />
      </div>
        <hr/>


        <h2>Iteration</h2>
          <p>
          I worked with my partner to develop an
          iterative testing campaign that would guide us to full mission success. We created a
          Matlab simulation that verified simple attitude control PID loops. We then built the craft and did
          thrust testing to verify that it was capable of a greater than one thrust to weight ratio. To aid in the development,
          and figuring out why flight failures happen, I added SD-card data logging for post-flight analysis.
          </p>
          <hr/>

        <h2>Roll Control</h2><p>
          We verified the full control loop from sensors to actuators by only allowing freedom in the roll axis,
          and verifying that the craft could maintain a steady roll angle. 
          </p>
          <hr/>

        <h2>Final Flights</h2>
          <p>
          After lots of testing and a few total rebuilds of the vehicle, we finally got Lodestar to perform a vertical
          takeoff and landing after the 23rd test flight.
          </p>
    </Layout>
  )
}