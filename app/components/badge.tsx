const Badge = ({ text }: { text: string }) => {
    return (
        <div className="bg-badge-blue text-pure-white text-xs lg:text-sm font-medium px-4 py-1 rounded-full">
            {text}
        </div>
    )
}

export default Badge;