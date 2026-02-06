import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const coachingCategories = [
  { title: 'U6 - Fundamentals', link: '/u6/glossary' },
  { title: 'U7 - Fundamentals', link: '/u7/glossary' },
  { title: 'U8 - Skill Acquisition', link: '/u8/glossary' },
  { title: 'U9 - Skill Acquisition', link: '/u9/glossary' },
  { title: 'U10 - Technical Growth', link: '/u10/glossary' },
  { title: 'U11 - Technical Growth', link: '/u11/glossary' },
  { title: 'U12 - Tactical Introduction', link: '/u12/glossary' },
  { title: 'U13 - Tactical Introduction', link: '/u13/glossary' },
  { title: 'U14 - Game Intelligence', link: '/u14/glossary' },
  { title: 'U15 - Game Intelligence', link: '/u15/glossary' },
  { title: 'U16 - Performance', link: '/u16/glossary' },
];

function CoachingCard({ category }) {
  return (
    <div className="col col--4-mobile col--6-tablet col--4-desktop margin-vert--md card-container">
      <div className="card-content">
        <Heading as="h3" className="card__title">
          {category.title}
        </Heading>
        <div className="card__body">
          <Link to={category.link} className="button button--primary card__button">
            View Drills
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function LibraryPage() {
  const pageTitle = 'Coaching Library';
  return (
    <Layout title={pageTitle} description="Explore our library of coaching categories.">
      <header className="hero hero--primary" style={{ padding: '4rem 0' }}>
        <div className="container">
          <Heading as="h1" className="hero__title hero__title--display">{pageTitle}</Heading>
          <p className="hero__subtitle" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', fontWeight: '300', opacity: '0.9' }}>Discover structured coaching plans for every age group, from fundamental skills to advanced game intelligence.</p>
        </div>
      </header>
      <main className="container margin-vert--lg">
        <div className="row card-grid">
          {coachingCategories.map((category, index) => (
            <CoachingCard key={index} category={category} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
