"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TagMediaSplitAbout from '@/components/sections/about/TagMediaSplitAbout';
import ProductCardFive from '@/components/sections/product/ProductCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactText from '@/components/sections/contact/ContactText';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { MapPin, Compass, Star, Heart, HelpCircle, Mail, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="small"
      sizing="small"
      background="aurora"
      cardStyle="frosted-heavy"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Destinations", id: "destinations" },
            { name: "Stories", id: "blog" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Zim Travels"
          bottomLeftText="Zimbabwe-based"
          bottomRightText="hello@zimtravels.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Explore Zimbabwe Like Never Before"
          description="Discover the untold stories of Africa's most captivating destinations through authentic travel experiences"
          tag="Travel Stories"
          tagIcon={MapPin}
          buttons={[
            { text: "Start Exploring", href: "destinations" },
            { text: "Read Latest", href: "blog" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065325910-r1j9kvw3.jpg",
              imageAlt: "Victoria Falls Zimbabwe"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065327300-u5yw8np1.jpg",
              imageAlt: "Safari wildlife Zimbabwe"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065328768-65qe5t1q.jpg",
              imageAlt: "Victoria Falls aerial view"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065330551-ymb8s1lh.jpg",
              imageAlt: "Zimbabwe landscape"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065331737-ncf7yst5.jpg",
              imageAlt: "Great Zimbabwe ruins"
            }
          ]
          ariaLabel="Hero section with Zimbabwe travel gallery"
        />
      </div>

      <div id="about" data-section="about">
        <TagMediaSplitAbout
          variant="card"
          title="Welcome to My Travel Journey"
          description="Based in Zimbabwe, I document the raw beauty and authentic experiences of Southern Africa through photography and storytelling"
          textboxLayout="default"
          contentTag="ABOUT ME"
          contentTagIcon={Compass}
          contentTitle="Passionate about authentic travel"
          contentDescription="For over five years, I have been exploring the hidden gems of Zimbabwe and sharing untold stories from my travels. From the majestic Victoria Falls to the wildlife-rich Hwange National Park, each journey reveals something remarkable about our continent. My mission is to inspire travelers to venture beyond the ordinary and experience Africa authentically."
          contentButtons={[{ text: "See My Portfolio", href: "blog" }]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065332910-56bpnca7.jpg"
          imageAlt="Travel blogger exploring Zimbabwe landscape"
          imagePosition="right"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="destinations" data-section="destinations">
        <ProductCardFive
          title="Featured Destinations"
          description="Explore the most captivating places I've discovered across Zimbabwe"
          tag="Must Visit"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "1",
              button: { text: "Learn More" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065334079-dqpcp8f1.jpg",
              imageAlt: "Hwange National Park",
              isFavorited: false
            },
            {
              id: "2",
              button: { text: "Learn More" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065334988-7m3qyeu0.jpg",
              imageAlt: "Lake Kariba",
              isFavorited: false
            },
            {
              id: "3",
              button: { text: "Learn More" },
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065336253-boeoq4pd.jpg",
              imageAlt: "Matobo National Park",
              isFavorited: false
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Traveler Stories"
          description="What fellow adventurers say about their journeys with me"
          tag="Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Adventure Traveler",
              testimonial: "The most authentic travel experience I've ever had. The insights and local connections made my Zimbabwe trip unforgettable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065339153-eejbd1bx.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Photography Enthusiast",
              testimonial: "Incredible access to wildlife photography spots. Every moment was perfectly guided and incredibly rewarding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065340544-eg8bwhgu.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Solo Traveler",
              testimonial: "Felt completely safe and inspired throughout. The storytelling and cultural immersion exceeded all expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065342200-ic764tqd.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Content Creator",
              testimonial: "Perfect collaborations and authentic narratives. My followers loved every single story from this adventure.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SiMkwDFagCJqdtr8SgryeO9Cj/uploaded-1766065343292-85mfdbg9.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Common Questions"
          description="Everything you need to know about planning your Zimbabwe travel adventure"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "When is the best time to visit Zimbabwe?",
              content: "The best time is May to October when temperatures are mild and wildlife viewing is excellent. This dry season offers perfect conditions for photography and safari experiences."
            },
            {
              id: "2",
              title: "What is the safety situation for travelers?",
              content: "Zimbabwe is generally safe for tourists who follow common travel precautions. Stick to established routes, avoid traveling at night, and stay aware of your surroundings. I provide detailed safety guidelines for all journeys."
            },
            {
              id: "3",
              title: "Do I need vaccinations before traveling?",
              content: "I recommend consulting with a travel health professional, but commonly suggested vaccinations include typhoid, hepatitis A, and yellow fever. Malaria prophylaxis may be necessary for certain regions."
            },
            {
              id: "4",
              title: "What should I pack for a Zimbabwe trip?",
              content: "Pack light, breathable clothing for daytime, warmer layers for evenings, sturdy hiking boots, sunscreen, and a good camera. I provide a detailed packing list for all travelers booking with me."
            },
            {
              id: "5",
              title: "Can you arrange photography workshops?",
              content: "Yes! I offer specialized photography tours that teach landscape, wildlife, and cultural photography techniques. These sessions are tailored to your skill level."
            },
            {
              id: "6",
              title: "What types of accommodation options are available?",
              content: "I arrange everything from luxury lodges to authentic guesthouses and camping experiences. Each option provides unique cultural immersion and comfort levels to suit different preferences."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to start your African adventure? Let's create an unforgettable travel experience together."
          animationType="entrance-slide"
          buttons={[
            { text: "Get in Touch", href: "contact" },
            { text: "View Full Portfolio", href: "blog" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          columns={[
            {
              title: "Explore",
              items: [
                { label: "Destinations", href: "destinations" },
                { label: "Travel Stories", href: "blog" },
                { label: "Photography", href: "blog" }
              ]
            },
            {
              title: "Resources",
              items: [
                { label: "Travel Guide", href: "about" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            }
          ]}
          title="Discover authentic Zimbabwe through curated travel experiences and storytelling"
          logoText="Zim Travels"
          contactItems={[
            { icon: MapPin, text: "Zimbabwe, Southern Africa" },
            { icon: Mail, text: "hello@zimtravels.com" },
            { icon: Phone, text: "+263 (0) 123 456 789" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}