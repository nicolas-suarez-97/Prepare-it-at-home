import React from "react";
import {EditorProps} from "../../../types";
import style from "../editor.module.scss";
import {LandingIds} from "../../../utils/constants";
import {ReviewItem} from "../../../types/Sections/ReviewsSectionType";
import {Icons} from "../../../utils/icons";

const EditorReviewsSection = ({data, setData, original, focus}: EditorProps) => {
    const {reviews} = data;

    return (
        <section
            className={style.section}
            onFocus={() => focus(LandingIds.REVIEWS_SECTION)}
        >
            <h2 className={style.section__title}>Reviews</h2>
            <div className={style.attribute}>
                <h5 className={style.attribute__label}>Título</h5>
                <input
                    className={style.attribute__input}
                    type="text"
                    value={reviews.title}
                    placeholder={original.reviews.title}
                    onChange={e => {
                        reviews.title = e.target.value
                        setData({...data, reviews})
                    }}
                />
                <i
                    className="material-icons"
                    onClick={() => {
                        reviews.items.push({review: 'New Review', author: 'New Author', authorPicture: 'https://cdn-icons-png.flaticon.com/512/147/147140.png'})
                        setData({...data, reviews})
                    }}
                >{Icons.ADD}</i>
            </div>
            {reviews.items.map((review: ReviewItem, index: number) => (
                <div key={index}>
                    <div className={style.attribute}>
                        <input
                            className={style.attribute__input}
                            value={review.author}
                            type="text"
                            style={{border: "none"}}
                            onChange={e => {
                                reviews.items[index].author = e.target.value
                                setData({...data, reviews})
                            }}
                        />
                        <input
                            className={style.attribute__input}
                            value={review.authorPicture}
                            type="text"
                            onChange={e => {
                                reviews.items[index].authorPicture = e.target.value
                                setData({...data, reviews})
                            }}
                        />
                        <i
                            className="material-icons"
                            onClick={() => {
                                reviews.items.splice(index, 1)
                                setData({...data, reviews})
                            }}
                        >{Icons.DELETE}</i>
                    </div>
                    <br/>
                    <textarea
                        style={{width: "100%", height: "80px", borderRadius: "10px"}}
                        onChange={e => {
                            reviews.items[index].review = e.target.value
                            setData({...data, reviews})
                        }}
                    >{review.review}</textarea>
                    <br/>
                </div>
            ))}
        </section>
    );
}

export default EditorReviewsSection;