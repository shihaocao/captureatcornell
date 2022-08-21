import Head from 'next/head'
import Link from 'next/link'

import { centered_img_block, dual_centered_img_block, triple_centered_img_block } from '../../components/centered_img_blocks';
import Layout from '../../components/layout'

import styles from '../../components/layout.module.css'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.css';


const title = "Tower of Cards"

export default function FirstPost() {
  return (
    <Layout layout_type={styles.container}>
        <Head>
            <title>{title}</title>
        </Head>
        <h1>{title}</h1>

        <Link href="/builds/builds-landing">
            <a>Back to builds</a>
        </Link>
        <br></br>

        <h4>Why</h4>
        <p>I was walking around Central Park with a friend, and we talked about how time has a very non-linear and exponential return pattern: there&rsquo;s not much you can do with 30 minutes and 20 dollars. But with 6 hours, and a hundred dollars, the possibilities are endless.</p>
        <p>An office chair race around the block? A DIY mixed drink night? Building a huge tower of cards?</p>
        <p>The tower of cards stuck in my head, and I knew I had to build it.</p>
        <h4>Prototyping</h4>
        <p>Before I went for the &ldquo;epic&rdquo; build, I ran a quick prototype that was much smaller, and only a few feet tall.</p>

        {centered_img_block('tower-of-cards/prototype.jpg')}

        <p>Here are a few of the things I learned:</p>
        <ul>
            <li>Air-cushion cards over smooth cards.
                <ul>
                    <li>Smooth-backed cards have absolutely no friction and are a nightmare to work with.
                    </li>
                </ul>
            </li>
            <li>Paper is absolutely essential
                <ul>
                    <li>Fiber in the paper causes high friction that stops the bottom edge of cards from sliding out
                    </li>
                    <li>Paper also provides very high <a href="https://www.youtube.com/watch?v=0olpSN6_TCc">in-plane tensile strength</a>
                    </li>
                    <li>I think this is well within the spirit of the build, I decide the rules haha
                    </li>
                </ul>
            </li>
            <li>Card towers have spring constants, I'll elaborate more on this later!
            </li>
        </ul>
        <h4>Design</h4>
        <p>I wanted to build something tall, something interesting, and something with card-friendly geometry. I also happened to be in Chicago, so the Willis Tower immediately came to mind.</p>
        
        {dual_centered_img_block('tower-of-cards/planning.jpg', 'tower-of-cards/willis-tower.jpg',
                                 {l_subtitle : "iPad planning", r_subtitle : "Willis Tower"})}

        <p>I found a 3D breakdown of the dimensions of the Willis Tower and annotated it on an iPad with rough measurements. As the Willis Tower consists of a 3 x 3 grid, I decided to make the length of a single sheet of paper 2 &ldquo;units&rdquo; to minimize the amount of paper cutting. That means that one &ldquo;unit&rdquo; is 5.5&rdquo;.</p>
        <p>Using simple ratios, given that the base was 3 units long, this makes the base 16.5&rdquo; x 16.5&rdquo;. And since the tower was about 16.5 units tall, this means the projected height of the tower would be 90.75&rdquo;, or Yao Ming (7&rsquo; 6&rdquo;) + 0.75&rdquo; haha. This was an important calculation to verify to make sure I wouldn&rsquo;t hit the ceiling. The ceiling seemed to be 11ft ish, so we were all set.</p>
        <p>Materials:</p>
        <ul>
            <li>3x 12 pack of bicycle playing cards&nbsp;<a href="https://www.amazon.com/dp/B08DJ7BM11">https://www.amazon.com/dp/B08DJ7BM11</a>&nbsp;
            </li>
            <li>~50+ sheets of paper&nbsp;<a href="https://www.amazon.com/dp/B01FV0F8H8">https://www.amazon.com/dp/B01FV0F8H8</a>&nbsp;
            </li>
        </ul>
        <h4>Base</h4>

        {triple_centered_img_block('tower-of-cards/base_1.jpg',
                                   'tower-of-cards/base_2.jpg',
                                   'tower-of-cards/base_3.jpg',
                                   {l_subtitle : "Paper base",
                                    m_subtitle : "The first few cells",
                                    r_subtitle : "The first few layers"})}

        <p>I used sheets of paper themselves to measure out the 16.5&rdquo; x 16.5&rdquo; base. Then I started stacking.</p>
        <p>The stacking method I used is called the <a href="https://www.wikihow.com/Build-a-House-of-Cards">"four-card cell"</a>.</p>
        <p>This boxed shape is much stronger than the standard triangular cell as each card is near vertical, and you even have some fault tolerance spending on how the cards are leaned.</p>
        <p>Once I finished a layer, (taking care to keep the numbers outward-facing for a consistent aesthetic), I would cap it off with the required sheets of paper.</p>
        
        <h4>Growing the Tower</h4>
        

        {centered_img_block('tower-of-cards/short.jpg',
                            {subtitle : "Tower after day 2"})}

        <p>As the tower grew, it became tough to line up each new floor directly below it.
            For the floors (sheets of paper) I essentially stared down the corners from above
            and tried to make sure they were in line. To line up the cards themselves, I took
            advantage of the translucency of the cards and patterned off the faint edges of the
            cards through the paper. I also improvised a measuring tape to try and
            center the cell in the middle of the 3 x 3 grid.</p>

        <p>Overall, my philosophy for this build was not to achieve perfection, but to instead:
           design and build on the fly. I thought it would be more fun to overcome engineering
           challenges as they come up. And lastly, I knew that my structure should easily have
           enough structural margin to tolerate small misalignments as the tower grew taller.</p>
        
        <h4>Corner Supports</h4>

        {centered_img_block('tower-of-cards/taller.jpg',
                            {subtitle : "Tower after day 4, with corner supports"})}
        {/* Taller */}

        <p>Corner supports are the first &ldquo;hotfix&rdquo; I came up with as I built. Since cards sticking out halfway would be unstable, edges often have overhangs over &ldquo;unstable&rdquo; regions. This is especially noticeable at corners. As an edge/corner droops, it lowers the starting height of the card directly above it, causing the next edge/corner to droop further. This issue compounds as you add layers.</p>
        <p>Eventually, a card on top of a drooped floor teeters on just tipping/sliding off, preventing you from stacking any higher. Thus, I had to develop a fix to go beyond about twelve card layers.</p>

        {dual_centered_img_block('tower-of-cards/without_support.jpg',
                                 'tower-of-cards/with_support.jpg',
                                 {l_subtitle : "Without support",
                                  r_subtitle : "With support"})}

        <p>The hotfix I added was a folded card corner support. The folded angle of the card allows it to stand on edges/corners without having to lean on anything, making it ideal to add strength to the voids near the edges/corners. I deemed the issue only severe enough at the corners, so I put two in each corner.</p>
        <p>Since corner supports also don&rsquo;t lean on anything, they use their full width to prop up the tower (as opposed to the 98% height that leaned cards have). The net sum effect of drooping and the full width let corners be restored to the same height as the center cells.</p>
        <p>Hotfix complete!</p>
        <h4>Upper Levels</h4>

        {centered_img_block('tower-of-cards/day_5.jpg',
                            {subtitle : "Tower after day 5"})}

        <p>As the upper levels had cells cut away from the corners and edges, they had higher perimeter-to-area ratios. This meant that per floor, there was much more relative edge void space compared to rigid central cells. In order to combat the additional drooping, I added corner supports to the increased number of corner positions.</p>
        <p>As the tower got taller, the weight of the upper levels began to increase the loading on the few base layers. This caused noticeable bending.</p>

        {centered_img_block('tower-of-cards/bending.jpg',
                            {subtitle : "Bending 3 braced by J and A"})}
    
        <p>This was slightly concerning, but interestingly: the bending/buckling action was braced the cards to either side of any given card. Therefore a buckling failure of a layer would require sliding off the paper, which was unlikely. As the tower gets heavier, it increases the loading into the paper, increasing the frictional force keeping the cards from sliding out.</p>
        
        <h4>Return of the Spring Constant</h4>

        <p>But even if the bending and buckling would not cause a direct loading failure, it did add a lot of compliance due to the flexure. This revealed itself in spring-like behavior. If you bumped the deck or a card as you were stacking, the entire tower would spring away and wobble back with deflections that got larger as the tower got taller. At final levels, the deflection was easily on the order of 5 mm.</p>
        <p>I found this quite interesting as the spring-like behavior was driven mostly by compliance as opposed to being driven by an elastic modulus of the paper.</p>
        <p>I anticipated this issue as I saw it very early on in the skinny high aspect ratio prototype tower. This is one reason I made sure to choose a design with a slightly more reasonable aspect ratio.&nbsp;</p>
        <p>But once the effect takes hold, the only possible mitigation is to be careful, gentle, and patient as you stack cards.</p>
        <p>Indeed being careful is often a great strategy.</p>
        <h4>Final Levels</h4>
        <p>Once you reach the final levels, you know it&apos;s getting real when you need a chair. These are the most fun layers, and also the scariest as everything is so shaky due to the springiness.</p>
        <p>The final antenna towers were made by tearing the cards a bit and interleaving heavily curled cards.</p>

        {centered_img_block('tower-of-cards/finished.jpg',
                            {subtitle : "7' 6.75\""})}

        <center><p><b>Yay! :)</b></p></center>

        <hr></hr>

        <center><h2><p>Death by a Thousand Cuts</p></h2></center>
        
        <p>I thought it would be the most fitting if we took down the tower by throwing cards
            at it. After all, that&rsquo;s how I took down the prototype too.</p>
        
        <p>I invited many of my friends, and we all stood about 5 meters away and just
            started chucking. Quickly we improved, but overall we probably had a 10% hit rate
            combined. Out of those that hit only 30% ish had enough speed to do any damage.
            It turns out that the weight of the tower put the cards under enough load that
            cards would often just bounce off.</p>
        
        <p>It was the small fraction of high-speed cards that hit that slowly took out the tower.</p>
        
        <p><b>Mid Stages</b></p>
        
        <p>As we threw our cards, most of the easy-to-knock-out layers and cells were taken out.
            At the same time, we started to get more accurate and faster with our throws.
            During our inspections, as we collected cards, we often found cards that were ripped from
            direct side-on impacts with papers. We found paper "floors" that were similarly ripped from impacts.</p>
        
        <p>Paper was not our target though. The throws that did the most damage were the ones that
            knocked cards out, or even better got lodged inside the tower as it slid
            under the cards, disrupting the internal structure.</p>
        
        <p>Despite our best efforts, the tower often surprised us with how much tenacity it had.</p>
        
        {centered_img_block('tower-of-cards/4-hearts.jpg',
                            {subtitle : "One card to hold them all"})}
        
        <p>As the cards from the tower fell onto the ground, we could also collect them to throw
            back at the tower. We used the tower against itself. There were easily 5+ decks of cards
            (~50 each), and we had to &ldquo;re-ollect cards&rdquo; easily 5+ times, so quick
            napkin math shows we really did deliver death by 1000+ cuts.</p>
        
        <p><b>Spaced Armor</b></p>
        
        <p>When you knocked out a few cells, they rarely cascaded and pulled down the rest of
            the structure with it. Logically this makes sense as all the walls are independent of each other,
            and the tangential load of a hanging sheet of paper was well within the margin of the structure.</p>
        
        <p>As a result, unsupported sheets of paper drooped over instead of fully collapsing, forming "spaced-armor"
             over the vulnerable cards. This made it difficult to damage the tower.</p>
        
        {centered_img_block('tower-of-cards/spaced-armor.jpg',
                            {subtitle : "Drooping paper resembling spaced armor"})}
        
        <p><b>The Last Stand</b></p>
        
        <p>At this point, we had probably been throwing for over an hour, and our
            arms were getting quite tired and sore. Despite even stepping forward to throw from only
            2 meters away, we still could not deliver a killing blow.</p>
        
        <p>We decided to step it up a notch and throw entire decks of cards (still inside the box).
            These were the killing blows.</p>
        
        <hr></hr>

        <center><h2><p>Reflection</p></h2></center>
        <p>Looking back, sometimes I feel like we ask ourselves, why do we do things like this? What is the value of toy engineering projects?</p>
        <p>The answer I tell myself is that it&rsquo;s a novel mental exercise to apply skills, theory, and philosophies to problems in a completely different field. It was fun to use rapid prototyping styles for a new material I had never worked with and to develop best practices on the fly. It was fun to try and explain why certain behaviors were happening, and then design around them.</p>
        <p>And maybe it was just awesome and cool. Inspiration and teaching are some of the best ways we can motivate progress. The tower gave me something to look forward to, and something to nerd out over with fellow engineers. Projects like these remind us that there are so many problems out there waiting to be solved, challenges waiting to be overcome. Someone just needs to dream of the solution, chase it, and tackle it.</p>
        <p>To dream that it is possible. That anything is possible.</p>
        <p><i>Why should we go to Mars? Because it&rsquo;s there.</i></p>
        <b>Final Tips</b>
        <ul>
            <li>Use a mask when building, it stops your breath from knocking cards down
            </li>
            <li>Wash your hands often to prevent cards from sticking to your hand if you get sweaty hands.
            </li>
            <li>Document your progress! It's fun to learn and build at the same time
            </li>
            <li>Have fun! :)
            </li>
        </ul>

    </Layout>
  )
}
