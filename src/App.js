// our hooks
import React, { useEffect, useRef, useFetch } from "react";
import "./App.scss";

// for easing
import { TweenMax, TimelineLite, Power3 } from 'gsap'

// asset
import arrow from './images/arrow-right.svg'

function App() {
  // giving our variables access to the dom
  let app = useRef(null);
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .8});

  // running our hero start up sequence when the app loads
  useEffect(() => {
    // Images
    const firstCat = images.firstElementChild; // or children[0]
    const secondCat = images.lastElementChild;
    
    //content
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    // remove initial flash
    TweenMax.to(app, 0, { css: { visibility: 'visible' } })

    //Images Animation
    tl.from(firstCat, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
      .from(firstCat.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)
      .from(secondCat, 1.4, { y: 1280, ease: Power3.easeOut }, .2)
      .from(secondCat.firstElementChild, 2, { scale: 1.6, ease: Power3.easeOut }, .2)

     //Content Animation
     tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  
    }, [tl])
    // facts from https://iheartcats.com/10-things-you-didnt-know-about-kittens/
  const kittenFacts = [
    "Kittens eyes open at around 1 week of age, but they can’t see or hear clearly until they are 2-3 weeks old. This makes them completely dependent on mom for their tiny little lives.",
    "Kittens conserve their energy by sleeping an average of 18 hours a day! That gives them plenty of fuel for growing strong and quickly into the adult cats we know so well. Even more interesting is the fact that a certain growth hormone is only released during sleep, which is why they must rest to grow.",
    "Even newborn kittens can purr and can often be heard doing so while they’re nursing or their mothers are cleaning them. While their squeaks and squeals are much more obvious, if you listen closely you’ll hear their content little motors running.",
    "Kittens can see color once they get their full vision, although they won’t see them as well as humans do. Because of this, they rely very much on a strong sense of smell that develops when their eyesight and hearing does.",
    "Kittens can be right- or left-pawed, the same way people are right- or left-handed. If you watch closely, you’ll be able to determine whether your kitten uses his right or left paw when checking out new things.",
    "Cats and kittens can fit their bodies almost anywhere they can squeeze their heads into, so be sure to exercise the utmost care and caution when kitten-proofing your house. Their adorable little heads can fit just about anywhere!",
    "A cat’s and kitten’s whiskers are about as long as their bodies are wide. This is because whiskers are used to navigate through their surroundings and explore new places without your cat having to put her entire body there.",
    "All kittens are born with blue eyes and will have their fully developed eye color at around 8 weeks old. Even the darkest eyed cats once had little blue eyes when they first opened.",
    "Adult cats have 30 teeth, but kittens initially only have 26 teeth. They loose these baby teeth when they’re about 6 months old and the full set of 30 will grow in to replace them.",
    "The average litter size for cats is about 1-9 kittens, but the largest ever recorded was a total of 19 kittens! That’s a lot of mouths to feed!",
  ]
  const rand = Math.floor((Math.random() * 10) + 1);
  const randomKittenFact = kittenFacts[rand]
  console.log(randomKittenFact)


  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
          <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Your next best friend</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">could well be</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">a kitten</div>
                </div>
              </h1>
              <p>{randomKittenFact} - iheartcats.com</p>
              <div className="btn-row">
                <button className="explore-button">Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el} className="hero-images-inner">
              <div className=" hero-image jinglebells">
                <img src="https://brunswickcentralvet.com.au/sites/default/files/images/article/kitten-portrait.jpg" alt="mittons" />
              </div>
              <div className="hero-image mittons">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT26FxczkMhz9Fe-ZmB6FKj1jJ4fuFRQql1dQ&usqp=CAU" alt="jinglebells" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;