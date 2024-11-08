'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Product from './product';
import { useSectionInView } from '@/lib/hooks';

export default function Products() {
  const { ref } = useSectionInView('Products', 0.5);

  return (
    <section ref={ref} id={'products'} className='scroll-mt-28 mb-28'>
      <SectionHeading>Product Portfolio</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Product {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
