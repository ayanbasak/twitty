package com.twitty.backend;

import com.twitty.backend.entity.News;
import com.twitty.backend.entity.Role;
import com.twitty.backend.entity.User;
import com.twitty.backend.properties.FileStorageProperties;
import com.twitty.backend.service.NewsService;
import com.twitty.backend.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
@EnableConfigurationProperties({ FileStorageProperties.class })
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

/*
	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER"));
			userService.saveRole(new Role(null, "ROLE_MANAGER"));
			userService.saveRole(new Role(null, "ROLE_ADMIN"));
			userService.saveRole(new Role(null, "ROLE_SUPER_ADMIN"));

			userService.saveUser(new User(null, "John Travolta", "john", "john@gmail.com", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Will Smith", "will", "will@gmail.com", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Jim Carry", "jim", "jim@gmail.com", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Arnold Schwarzenegger", "arnold", "arnold@gmail.com", "1234", new ArrayList<>()));

			userService.addRoleToUser("john@gmail.com", "ROLE_USER");
			userService.addRoleToUser("john@gmail.com", "ROLE_MANAGER");
			userService.addRoleToUser("will@gmail.com", "ROLE_MANAGER");
			userService.addRoleToUser("jim@gmail.com", "ROLE_ADMIN");
			userService.addRoleToUser("arnold@gmail.com", "ROLE_SUPER_ADMIN");
			userService.addRoleToUser("arnold@gmail.com", "ROLE_ADMIN");
			userService.addRoleToUser("arnold@gmail.com", "ROLE_USER");
		};
	}*/
/*
	@Bean
	CommandLineRunner run(NewsService newsService) {
		return args -> {
			newsService.saveNews(new News(1l,"","1p.jpg", "","LIVE","India national news","Armed forces aspirants in several states took to the streets on Thursday to protest against the newly launched Agnipath recruitment scheme. According to media reports, the aspirants are unhappy with the length of service, no pension provisions for those released early, and the 17.5 to 21-year age restriction that now makes many of them ineligible. Protesters blocked roads and damaged public properties in states, including Bihar, Madhya Pradesh, Haryana and Uttarakhand. Content warning: This timeline includes live-updating Tweets which may consist of sensitive images.","",""));
			newsService.saveNews(new News(2l,"","2p.jpg", "Politics","Trending","Protests erupt in several states over Agnipath army recruitment scheme","Armed forces aspirants in several states took to the streets on Thursday to protest against the newly launched Agnipath recruitment scheme. According to media reports, the aspirants are unhappy with the length of service, no pension provisions for those released early, and the 17.5 to 21-year age restriction that now makes many of them ineligible. Protesters blocked roads and damaged public properties in states, including Bihar, Madhya Pradesh, Haryana and Uttarakhand. ","44K","India national news"));
			newsService.saveNews(new News(3l,"3.jpg","3p.png", "","LIVE","Russia continues to target eastern Ukraine","Hundreds of civilians who took shelter at the Azot chemical plant in the eastern Ukrainian city of Severodonetsk are unable to evacuate due to Russian attacks, the Luhansk regional military governor said. On Thursday, French President Emmanuel Macron, German Chancellor Olaf Scholz and Italian Prime Minister Mario Draghi met with Ukrainian President Volodymyr Zelenskyy in Kyiv and said they would back Ukraine’s candidacy to join the EU.","","War in Ukraine"));

			newsService.saveNews(new News(4l,"","4p.jpg", "Entertainment","Trending","The trailer of Brahmastra is released","The makers of Brahmastra Part One: Shiva released the film's trailer on Wednesday. Directed by Ayan Mukerji, Brahmastra is a mythology-based fantasy film with Ranbir Kapoor and Alia Bhatt playing the central characters, Shiva and Isha. The star cast also features Amitabh Bachchan, Nagarjuna and Mouni Roy. Brahmastra is scheduled to release on September 9, 2022.","1K","Entertainment"));
			newsService.saveNews(new News(5l,"","5p.jpg", "Economy","Trending","$646 billion — that’s the economic cost of violence in India","Violence has reportedly cost the world a whopping $16.5 trillion in 2020, according to a GPI report. India ranked 72 in this regard, with a cost of $646 billion.","","Business Insider India"));
			newsService.saveNews(new News(6l,"6.jpg","6p.jpg", "","","Digital twins offer multiple potential benefits: they can aid design optimization, reduce costs and time to market, and accelerate the organization’s response to new customer needs.","","","Linda Grasso"));
			newsService.saveNews(new News(7l,"","7p.jpg", "","","Law enforcers turn criminals under BJP rule. Police hack phones/computers to frame activists.","","","Mahua Moitra"));

			newsService.saveNews(new News(8l,"","8p.jpg", "","","","Employees at SpaceX have written an open letter denouncing Elon Musk's behavior.","","NYTimes Tech"));
			newsService.saveNews(new News(9l,"","9p.jpg", "","","","Pure CSS or CSS framework?","","Csaba Kissi"));
			newsService.saveNews(new News(10l,"","10p.jpg", "","","","2. You are ignoring the fundamentals :","","Abel"));
			newsService.saveNews(new News(11l,"11.jpg","11p.png", "","","","The Boring Company will build a 34-mile tunnel network underneath Las Vegas","","Engadget"));
			newsService.saveNews(new News(12l,"12.jpg","12p.jpg", "","","","Elon Musk addressed Twitter's 7,500 employees and declined to rule out layoffs and said remote work would only be allowed for exceptional employees.","","Forbes"));

			newsService.saveNews(new News(13l,"","13p.jpg", "","","","JavaScript has an incredible standing in Serverless.","","Oliver Jumpertz"));
			newsService.saveNews(new News(14l,"","14p.jpg", "","","","SpaceX employees have penned a letter to company executives denouncing the behavior of CEO Elon Musk, calling it \"a frequent source of distraction and embarrassment\"","","Bloomberg"));
			newsService.saveNews(new News(15l,"","15p.jpg", "","","","Bill Gates said he thinks cryptocurrencies and NFTs are “100%” based on the greater fool theory","","The Wall Street Journal"));
			newsService.saveNews(new News(16l,"16.jpg","16p.jpg", "","","","Me waiting for ETH to fall below $1000 so I can invest my $37","","Hawks"));

			newsService.saveNews(new News(17l,"","17p.jpg", "","","","Today, I sat down to analyze one of the most important twitter accounts in the Machine Learning niche","","AK"));
			newsService.saveNews(new News(18l,"","18p.jpg", "","","","Also a MUCH  more sophisticated version of this is the voice cloning package, also written in Python It takes any voice and will read text back to you in that voice (you can give it yours)","","Marlene Mhangami"));
			newsService.saveNews(new News(19l,"","19p.jpg", "","","","Seeing a massive problem in the security industry today. We have brand new candidates lacking \"hands on\" experience coming into the workforce and finding it extremely difficult to find a job. 1/10","","Dave Kennedy"));
			newsService.saveNews(new News(20l,"","20p.png", "","","","Patricia Egger, our Security and Governance Manager spoke on June 14th at an EU Parliament hearing about spyware, arguing against the weakening of end-to-end encryption and similar technologies designed to protect the privacy of general population","","Proton Mail"));

			newsService.saveNews(new News(21l,"","21p.jpg", "","","","Every fundraising announcement story in TechCrunch, Forbes, etc. focuses on the founders. ","","Roshan Patel"));
			newsService.saveNews(new News(22l,"","22p.jpg", "","","","The number of signatures was not immediately available. That's quite an important detail to not emphasize. It's the difference between one disgruntled employee and a company-wide revolt.","","Eric Dahl"));
			newsService.saveNews(new News(23l,"23.jpg","23p.jpg","","","","Ranking on top of Google search is worth MILLIONS of dollars. Rule no 1: Content is the KING","","Adarsh Gupta"));
			newsService.saveNews(new News(24l,"","24p.jpg", "","","","Web Development Thread #1 " +
					"\n" +
					"JavaScript Fundamentals \n" +
					"\n" +
					"• Variables\n" +
					"• Comments\n" +
					"• DataTypes\n" +
					"    • String\n" +
					"    • Number\n" +
					"    • ...more\n" +
					"• Operators\n" +
					"    • Arithmetic Operators\n" +
					"    • Comparison Operators\n" +
					"    • Logical Operators\n" +
					"    • Bitwise Operators","","Suhail Kakar"));

			newsService.saveNews(new News(25l,"","25p.jpg", "","","","Wanna share Instagram Reels but don't want to show your face? Here's a very easy and still valuable way you can do it! Just pick a useful \"list\" of 3 tools or valuable resources that people in your niche could use.","","Rajat Jain"));
			newsService.saveNews(new News(26l,"","26p.png", "","","","Describe your creative process in 3 words or less \uD83C\uDFA8✨","","Meta for Creators"));
			newsService.saveNews(new News(27l,"27.jpg","27p.png", "","","","Facebook lets you delete your accounts via the app or a desktop browser.","","Gadgets 360"));
			newsService.saveNews(new News(28l,"28.jpg","28p.jpg", "","","","US home mortgage rates hit 5.78%, the highest level since November 2008, reflecting tighter monetary policy and inflation expectations","","Financial Times"));

			newsService.saveNews(new News(29l,"","29p.jpg", "","","","I made 50k overnight during the Ethereum Classic pump at 17 years old. Lost it all in two days.","","Coinfessions"));
			newsService.saveNews(new News(30l,"","30p.jpg", "","","","A clear message on hiring from our CEO. What’s more, many of our open roles are in Europe so come and speak to us if you’re interested in taking your career in crypto forward","","Sendi Young"));
			newsService.saveNews(new News(31l,"","31p.jpg", "","","","While Ripple Is Getting Sued They Are Continuing To Grow As A Business & Hire More People \n" +
					"\n" +
					"Yet Other Crypto Companies Are Laying Off 10-15% Of Staff..\n" +
					"\n" +
					"That Is The Ultimate Indication Of Extreme Strength","","The Bearable Bull"));
			newsService.saveNews(new News(32l,"","32p.jpg", "","","","Ripple is hiring for hundreds of roles around the globe – both in person and remote. Fair warning - we have a “no assholes” policy here.","","Brad Garlinghouse"));

		};
	}*/
}
/*
* id;
    private String topic;
    private String type;
    private String heading;
    private String description;
    private String tweets;
* */