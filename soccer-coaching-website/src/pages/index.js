import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// Assuming HomepageFeatures and its CSS exist and are compatible
// import HomepageFeatures from '@site/src/components/HomepageFeatures'; 
// import styles from './index.module.css';

// Using a placeholder for HomepageFeatures and styles for now,
// as their content is not provided and not critical for this update.
// In a real scenario, these would be imported and used.
const HomepageFeatures = () => (
  <div className="container text--center margin-vert--lg">
    <div className="row">
      <div className="col col--4 padding-vert--md">
        <h3>Save Time</h3>
        <p>Ready-to-use sessions so you can focus on your players, not your clipboard.</p>
      </div>
      <div className="col col--4 padding-vert--md">
        <h3>Tactical Clarity</h3>
        <p>Clear diagrams and coaching cues to help you explain 'the why' behind every drill.</p>
      </div>
      <div className="col col--4 padding-vert--md">
        <h3>Mobile Optimized</h3>
        <p>Access your plans directly from the pitch on any device.</p>
      </div>
    </div>
  </div>
);

const styles = {
  heroBanner: 'heroBanner',
  buttons: 'buttons',
  features: 'features'
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={'hero hero--primary' /* Applying hero--primary class directly */}>
      <div className="container">
        <h1 className="hero__title">Elite Session Plans for the Modern Coach</h1>
        <p className="hero__subtitle">Spend less time planning and more time coaching. Professional drills, tactical breakdowns, and pitch-ready sessions for all age groups.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/browse">
            Browse the Library
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Elite Session Plans | ${siteConfig.title}`}
      description="Spend less time planning and more time coaching. Professional drills, tactical breakdowns, and pitch-ready sessions for all age groups.">
      <HomepageHeader />
      <main>
        {/* Replaced with the placeholder component */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
