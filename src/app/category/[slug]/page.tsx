import React from 'react';

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1>Category: {params.slug}</h1>
    </div>
  );
};

export default CategoryPage;
