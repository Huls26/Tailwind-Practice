import avatarAli from "../../img/avatar-ali.png";
import avatarAnisha from "../../img/avatar-anisha.png";
import avatarRichard from "../../img/avatar-richard.png";

export default function TestimonialCard({ data }) {
    const {img, name, description} = data;

    function getImg(img) {
        if (img === "avatar-anisha") {
            return avatarAnisha
        } else if (img == "avatar-ali") {
            return avatarAli
        } else {
            return avatarRichard
        }
    }

    return (
        <article id="testimonial-card" className="px-5 md:bg-veryLightGray">
            <div className="max-w-[4em] mx-auto mb-4 md:-mt-10">
                <img src={ getImg(img) } alt="avatar" className="w-full"/>
            </div>

            <h3 className="font-bold mb-5">{ name }</h3>

            <p className="text-sm text-darkGrayishBlue mb-8 max-w-sm mx-auto">{ description }</p>
        </article>
    )
}