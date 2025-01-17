import React from 'react';

interface ServiceCardProps {
    title: string;
    content: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, content }) => {
    return (
        <div
            key={title}
            className="starwrapper relative px-10 pb-8 pt-20 text-xl bg-[#F8F8F8] rounded-xl hover:bg-hover-color"
        >
            <h3>{title}</h3>
            <p className="py-2 text-[13px] leading-5">{content}</p>
            <span
                aria-hidden="true"
                className="star inline-block w-10 h-10 bg-btn-color rounded-full absolute top-7"
            ></span>
        </div>
    );
};

export default ServiceCard;
