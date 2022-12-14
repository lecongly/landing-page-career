import React from 'react';

interface Props {
    text: string,
    className?: string
}

const Button = ({text, className}: Props) => {
    return (
        <button type="button" className={`px-4 py-3 bg-neutral-50 bg-cyan-500 text-neutral-50 font-medium
    rounded-lg hover:rounded-2xl
    hover:rounded-2xl transition-all ${className}`}>
            {text}
        </button>
    );
};

export default Button;