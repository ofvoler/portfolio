import React from "react"
import Layout from "../components/layout"
import ImageWrap from "../components/portfolioPageImage"
import "../css/styles.css"

export default function MobileUXUINew() {
  return (
    <Layout>
      <h2 style={{ marginTop: '50px' }}>Mobile UX/UI</h2>
      <h5 style={{ marginBottom: "50px" }}>2020</h5>

      <p>Work with a small startup team to create simple branding and a prototype for their food waste app.</p>

      <ImageWrap>
        <img src="https://oliviavoler.com/wp-content/uploads/2020/10/phone-with-groceries-smaller.png" 
            alt="" />
        <img src="https://oliviavoler.com/wp-content/uploads/2020/10/flat-lay-mockup@2x.png" 
            alt="" />
      </ImageWrap>

      <h5 className="portfolioSectionTitle">Project</h5>

      <p>Create a logo and simple branding for the app.</p>
      <p>Based off of mockups and a test version of the app, create high-fidelity, prototyped mockups, then make the handoff to the developers.</p>
      <p>Provide guidance and feedback on initial versions of the app to ensure that they are consistent with the mockups.</p>

      <h5 className="portfolioSectionTitle">Existing materials</h5>

      <p>
        The app had already been primitively started when I joined, but the team wanted to restart completely with 
        a new coding language and new UI, so that’s where I was brought in. Here are a few screenshots of the UI before 
        I started: the first two are the very original mockups, and the second two are work they were doing just as I began.
      </p>

      <ImageWrap>
        <img 
          src="https://res.cloudinary.com/ofvoler/image/upload/v1616990457/fresh-existing-materials.png" 
          alt="Existing project materials" />
      </ImageWrap>

      <h5 className="portfolioSectionTitle">Branding</h5>

      <p>
      I started the branding with a logo. The team had originally chosen a logo with a squirrel, 
      which doesn’t exactly go hand in hand with preventing food waste. 
      I started out by sketching logos that reminded me of something fresh—as a result, 
      I ended up with lemon-themed logos. I then translated a couple of these ideas into digital logos.
      </p>

      <ImageWrap>
        <img
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617653528/fresh-lemon-logos.png" 
          alt="Drafts of logos, green text with lemons"/>
      </ImageWrap>

      <p>
      Even though the team really liked these logos (especially the ones on the left), 
      the lemon theme that I landed on definitely reminded us of a certain food delivery company. 
      We didn’t want to run into any sort of copyright problems, so I thought of ways to redesign the logo with different fruits:
      </p>

      <ImageWrap>
        <img 
          className="portfolioPageImage half" 
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617655332/fresh-logo-onion.png" 
          alt="Logo with onion" />
        <img 
          className="portfolioPageImage half"
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617655332/fresh-logo-apple.png"
          alt="Logo with apple" />
        <img 
          className="portfolioPageImage half"
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617655332/fresh-logo-orange.png"
          alt="Logo with orange" />
        <img 
          className="portfolioPageImage half"
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617655332/fresh-logo-grapefruit.png" 
          alt="Logo with grapefruit" /> 
      </ImageWrap>

      <p>
        We ended up going with the logo with the orange, with the lone orange that can be used as a secondary logo 
        or in cases where the full logo doesn’t fit. You can actually see this logo being used in the 
        ‘Existing materials’ section (right two mockups); they implemented the logos into their design right after I created them.
      </p>

      <p>
        The color scheme relies mainly on the green and orange in the logo. I also drew in the grapefruit color 
        to develop the color gradient that is used on the second round of mockups.
      </p>

      <ImageWrap>
        <img
          className="portfolioPageImage threequarter"
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617673125/fresh-logo-final.png"
          alt="Logo with orange slice" />
        <img
          className="portfolioPageImage quarter"
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617673125/fresh-logo-slice-final.png"
          alt="Orange slice" />
        <img 
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617673125/fresh-color-palette.png"
          alt="Color palette" />
      </ImageWrap>

      <h5 className="portfolioSectionTitle" >First round of mockups</h5>

      <p>
        The first round of mockups are more of wireframes than mockups. This was the part of the project where the team 
        was deciding on the layout of the app and what would be on each page. As a result, everything is simple, 
        with a lot of white and ideas that aren’t fully fleshed out.
      </p>

      <p>
        One thing that I worked on a lot in this phase was working on the home screen. 
        In the original design, the entire container for each food is filled in with the color 
        corresponding to its expiration date. However, then the text colors were different for each background color, 
        and even so it was hard to read a lot of the text.
      </p>

      <p>
        I tried to redesign this to make it more legible, first trying a gradient of all one color and only black text. 
        However, then it’s not very indicative of how close the food actually is to expiration if everything is a reddish color. 
        I then tested using a scale of red to green. While I suppose that works, it doesn’t look very good if there are jumps 
        in between expiration dates, which would likely be there most of the time. 
      </p>

      {/* Can this be refactored into a component? */}
      <ImageWrap>
        <img 
          className="portfolioPageImage third"
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617674653/fresh-ugly-mockups-1.png"
          alt="Mockup 1" />
        <img 
          className="portfolioPageImage third"
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617674653/fresh-ugly-mockups-2.png"
          alt="Mockup 2" />
        <img 
          className="portfolioPageImage third"
          src="https://res.cloudinary.com/ofvoler/image/upload/v1617674653/fresh-ugly-mockups-3.png"
          alt="Mockup 3" />
      </ImageWrap>

      <p>
        You can see below what I finally ended up with—I decided to color only the text with the date until expiration. 
        I realize that this still does have some contrast issues, but I made the text as bold and big as possible to be 
        able to still read the date until expiration. I know contrast is always important, but it’s easy to tell that when 
        it’s yellow it’s halfway between red and green, which still gives an overall view of expiration date.
      </p>

      <p>
        Compared to the materials I was given, I was actually quite happy with this. However, after showing it to 
        potential users, I got feedback that it wasn’t the flow of the app wasn’t very intuitive. 
        Also, it was hard to know how to edit or delete a food, and the statistics weren’t very helpful. 
        From this, I decided that the interface should definitely be improved. 
      </p>

      {/* Make this a modal that shows full size */}
      <ImageWrap>
        <img src="https://res.cloudinary.com/ofvoler/image/upload/v1617674851/fresh-first-round-mockups.png"
          alt="First set of mockups" />
      </ImageWrap>

      <h5 className="portfolioSectionTitle" >Second round of mockups</h5>
      
      <p>
        The app went through a huge transformation from the first round of mockups to the second round. 
        I started to actually incorporate the branding, give it more of a modern look, 
        and make everything feel more consistent as a whole. 
      </p>

      <p>
        Although white space is definitely necessary, I incorporated more of the brand colors so it 
        didn’t feel so flat and white. I also utilized the colors gauging food expiry in other places 
        throughout the app to create a more consistent feel.
      </p>

      <ImageWrap>
        <img src="https://res.cloudinary.com/ofvoler/image/upload/v1617675381/fresh-second-round-mockups.png"
          alt="Second set of mockups" />
      </ImageWrap>

      <h5 className="portfolioSectionTitle">Current prototype</h5>

      <ImageWrap>
        <iframe 
          src="https://www.figma.com/embed?embed_host=shareamp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9R2kp0YuMpmuH98CZAzKxL%2FFresh-mockups-Copy%3Fnode-id%3D275%253A666%26viewport%3D570%252C186%252C0.2009398341178894%26scaling%3Dscale-down" 
          width="100%"
          height= "800" 
          allowfullscreen>
        </iframe>
      </ImageWrap>


      <h5 className="portfolioSectionTitle">Takeaways</h5>

      <p>
        There’s still a lot of work to be done, as the app is currently being developed. 
        I started this as one of my first introductions to UX/UI and have loved using this project to 
        delve into all of the features that Figma has to offer. I’m really pleased with the transition 
        from the first round of mockups to the second, but it’s crazy to me how much work can still be done 
        at any point. Just the other day, I found out a new way to do swipe transitions—I’m always learning! 
      </p>

    </Layout>
  )
}