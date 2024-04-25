import { HeroImage } from "@/components/hero-image";
import backgroundImage from "@/assets/solar-power-plant-2.webp";
import { siteConfig, SiteConfig } from "@/config/site";
import { BannerArgs, FeatureBanner } from "@/components/feature-banner";

import mainImage1 from '@/assets/feature-banner-1-alt.svg';
import secondaryImage1 from '@/assets/feature-banner-1-image-2.svg';
import mainImage2 from '@/assets/feature-banner-2-alt.svg';
import secondaryImage2 from '@/assets/feature-banner-2-image-2.png';
import mainImage3 from '@/assets/feature-banner-3-alt.svg';
import secondaryImage3 from '@/assets/feature-banner-3-image-2.png';

export default function Home() {
	const featureBanners : BannerArgs[] = [
		{
			imageSource: mainImage1,
			secondImageSource: secondaryImage1,
			titleText: "Sole Pre-Recorded Video Interview With Each CV Submission",
			descriptionText: "Time saver for internal HR & speeds time to hire by 70%. Saves the HR team time by eliminating the need for 1st round interview",
			alt: "Business Webinar",
			secondAlt: "Power Lines"
		},
		{
			imageSource: mainImage2,
			secondImageSource: secondaryImage2,
			titleText: "Tailored Solutions",
			descriptionText: "Access our exceptional Value Add capabilities for mobilisation and contractor management logistics, which includes: sponsoring work permits, flight, accommodation management, payroll and local income tax management",
			alt: "Lady Checking Documents",
			secondAlt: "Wind Turbines",
			reverse:true
		},
		{
			imageSource: mainImage3,
			secondImageSource: secondaryImage3,
			titleText: "Market Experts",
			descriptionText: "Work with an Account Manager with at least 10 years’ experience in the international recruitment sector, focussed within Power and Energy.",
			alt: "Man Working At Desk",
			secondAlt: "Power Grid",
		}
	];

	return (
		<div>
			<HeroImage 
				source={backgroundImage} 
				mainText="GPP Recruitment"
				subText="Continuously Improving Our Client Human Capital" 
				alt="Solar Power Plant"
			/>
			<p className="md:hidden text-2xl text-center font-semibold p-5 text-foreground-600">What We Do</p>
			{
				featureBanners.map((args,idx) => {
					return (
						<div className="relative" key={idx}>
							<FeatureBanner
								{...args}
							/>
					</div>
					)
				})
			}
		</div>
	);
}
