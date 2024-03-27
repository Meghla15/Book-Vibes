import React from 'react';

const AboutUs = () => {
    return (
        <section className=" bg-green-50 p-4  rounded-3xl container mx-auto">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12 ">
		<h1 className="text-4xl font-semibold leading-none text-center">Our Story</h1>
       
	</div>
	<div className="container mx-auto  gap-8 lg:gap-20 md:px-10 md:pb-10">
		<div>
			<div className="relative text-center">
				
				<p className="px-6 py-1 text-lg italic">Your Book Vibe was born out of a shared love for stories. Our team of avid readers, writers, and dreamers came together with a singular mission: to create a haven where bookworms can thrive. Whether you're a seasoned bibliophile or just dipping your toes into the literary ocean, we've reserved a cozy nook for you.</p>
				
			</div>
			
		</div>
		<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-4xl font-semibold leading-none text-center">What Sets Us Apart</h1>
			<div className="relative text-center mt-4 py-3">
                
				
				<p className="px-6 py-1 text-lg italic"><span className='font-bold text-2xl'>1.Curated Selections:</span> Our shelves boast carefully curated collections—from timeless classics to contemporary bestsellers. We handpick each title, ensuring that every book resonates with our diverse community of readers.</p>
				<p className="px-6 py-1 text-lg italic"><span className='font-bold text-2xl'>2.Community and Conversation:</span> Your Book Vibe isn't just a website; it's a gathering place. Join our virtual book club discussions, engage with fellow book lovers in the comments section, and share your literary discoveries. Let's celebrate the joy of reading together.</p>
				<p className="px-6 py-1 text-lg italic"><span className='font-bold text-2xl'>3.Author Spotlights:</span>  We shine a spotlight on the brilliant minds behind the words. Explore exclusive interviews, learn about an author’s writing rituals, and discover the inspirations that fuel their creativity.</p>
				<p className="px-6 py-1 text-lg italic"><span className='font-bold text-2xl'>4.User-Friendly Experience: </span>Navigating our website is as delightful as flipping through the pages of a beloved novel. Our intuitive design ensures that you can focus on what truly matters—the stories waiting to be explored.</p>
				
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
			
		</div>
        <h1 className="text-4xl font-semibold leading-none text-center">Our Promises</h1>
        <p className="px-6 py-1 text-lg italic mt-3 text-center">At Your Book Vibe, we promise to be your literary compass, guiding you toward hidden gems, epic adventures, and quiet moments of reflection. Whether you seek escapism, knowledge, or heartwarming tales, we're here for you.So, dear reader, grab a cup of tea, snuggle into your favorite reading spot, and let the journey begin.</p>
    </div>
</section>
    );
};

export default AboutUs;