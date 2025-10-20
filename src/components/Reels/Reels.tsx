import React from 'react';

interface ReelsProps {
    images: string[];
    buttonText: string;
    onButtonClick?: () => void;
}

const Reels: React.FC<ReelsProps> = ({ images, buttonText, onButtonClick }) => {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '24px'
            }}>
                {images.slice(0, 4).map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Reel ${idx + 1}`}
                        style={{
                            width: '120px',
                            height: '120px',
                            objectFit: 'cover',
                            borderRadius: '8px'
                        }}
                    />
                ))}
            </div>
            <button
                style={{
                    padding: '10px 32px',
                    fontSize: '16px',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#222',
                    color: '#fff',
                    cursor: 'pointer'
                }}
                onClick={onButtonClick}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default Reels;