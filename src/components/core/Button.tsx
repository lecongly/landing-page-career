import React from 'react';

interface Props {
    text: string,
    maxWidth?: boolean
}

const Button = ({text, maxWidth}: Props) => {
    return (
        <button type="button" className={`px-4 py-3 bg-neutral-50 bg-cyan-500 text-neutral-50 font-medium
    rounded-lg hover:rounded-2xl
    hover:rounded-2xl transition-all ${maxWidth ? 'w-full' : ''}`}>
            {text}
        </button>
    );
};

export default Button;