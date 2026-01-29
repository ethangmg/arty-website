import React from 'react';

interface CardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  variant?: 'service' | 'project';
}

const Card: React.FC<CardProps> = ({
  image,
  alt,
  title,
  description,
  link,
  linkText = 'View Details →',
  variant = 'service'
}) => {
  const baseClasses = "p-8 text-center border border-gray-200 rounded-lg";
  const projectClasses = "bg-white rounded-lg overflow-hidden shadow-lg";
  
  const cardClasses = variant === 'project' ? projectClasses : baseClasses;
  
  const imageClasses = variant === 'project' 
    ? "w-full h-64 object-cover" 
    : "w-24 h-24 mx-auto object-contain rounded-lg mb-4";
  
  const titleClasses = variant === 'project'
    ? "text-xl font-semibold mb-2 text-gray-800"
    : "text-xl font-semibold mb-4 text-gray-800";
  
  const descriptionClasses = variant === 'project'
    ? "text-gray-600 mb-4 leading-relaxed"
    : "text-gray-600 leading-relaxed";

  const linkClasses = "text-gray-800 font-medium transition-colors duration-300 hover:text-gray-600";

  return (
    <div className={cardClasses}>
      <img 
        src={image} 
        alt={alt} 
        className={imageClasses}
      />
      <div className={variant === 'project' ? 'p-6' : ''}>
        <h3 className={titleClasses}>{title}</h3>
        <p className={descriptionClasses}>{description}</p>
        {link && (
          <a 
            href={link} 
            className={linkClasses}
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
