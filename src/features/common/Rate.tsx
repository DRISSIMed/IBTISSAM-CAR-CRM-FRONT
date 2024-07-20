import React, { useEffect, useState } from 'react'
import { UrlApi } from './Util';
import Avatar from 'react-avatar'
import { BiCommentAdd } from "react-icons/bi";
import { toast } from 'react-toastify';
import './Rate.css'
import Appartement from '../Appartement/Appartement';
import { Card } from 'primereact/card';
import { Rating, RatingChangeEvent } from "primereact/rating";
import { useTranslation } from "react-i18next";
import { getPublicImagePath } from '../common/Util';
export default function Rate(subject: any) {

  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('')
  const [commentData, setCommentData] = useState<any>([])
  const { t, i18n } = useTranslation();
  const handleCommentSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    setComment(e.currentTarget.value)
  }
  console.log("ITEM ID IN RETE ", subject.itemId)
  console.log("OBJECT IN RATE ", subject.subject)
  useEffect(() => {
    fetch(UrlApi + 'comment/get/comment/' + subject.itemId + '?object=' + subject.subject, {
    })
      .then(response => response.json())
      .then(response => {
        console.log('RESPONSE ', response)
        setCommentData(response)
      })
      .catch(function (error) {
        console.error(error)
      })
  }, [subject.itemId])

  const addComment = () => {
    const Object = {
      comment: comment,
      datePublsih: new Date(),
      starsNbr: rating,
      rangeCar: subject.subject === "car" ? { id: subject.itemId } : null,
      appartement: subject.subject === "appartement" ? { id: subject.itemId } : null
    }
    fetch(UrlApi + 'comment/create', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, method: 'POST', body: JSON.stringify(Object)
    })
      .then(response =>
        response.json())
      .then((response: any) => {
        setComment('')
        setRating(null)
        setCommentData([response, ...commentData])
        if (response) {
          toast.success("Comment added !", { className: 'toast-message' });
        }

      })
      .catch(function (error) {
        console.error(error)
      })
  }

  const handleRemoveComment = (id: any) => {
    console.log("ID ==>>", id)
    console.log("rating ",rating);
    
    fetch(UrlApi + 'comment/delete/' + id, { method: 'POST' })

      .then(response => response.json())
      .then(response => {
        setCommentData(response)
        if (response) {
          toast.success("Comment removed !", { className: 'toast-message' });
        }


      })
      .catch(function (error) {
        console.error(error)
      })


  }
  const addStar = (id: any) => {
    console.log("ID ==>>", id)

    const element = document.getElementById(id) as HTMLInputElement
    if (element.src === 'http://localhost:3000' + getPublicImagePath('starOutline.png')) {
      element.src = getPublicImagePath('starFullLine.png')

    }
    else {
      element.src = getPublicImagePath('starOutline.png')
    }

  }

  const header = (
    <div className="card flex justify-content-center">
      <Rating value={rating ?? 0} onChange={(e: RatingChangeEvent) => setRating(e.value ?? 0)} cancel={false} onIcon={<img src={getPublicImagePath('starFullLine.png')} alt="" style={{ width: '20px', height: '20px' }}/>}/>
    </div>
  )
  return (
    <div className='Container__Rate'>
      <div className="card" style={{ width: '80%' }}>

        <Card title={header} >
          <Avatar value='MD' round={true} size='30px' style={{ marginLeft: '10px' }} />
          <input type="text" style={{ width: '90%' }} value={comment} onChange={(e: React.FormEvent<HTMLInputElement>) => handleCommentSubmit(e)} placeholder={t("tAddComment")} />
         {(comment && comment!==null)?<BiCommentAdd style={{ cursor: 'pointer', marginTop: '6px' }} size="25px" onClick={addComment} />:""}

        </Card>
      </div>

      {commentData && commentData.length > 0 ?

        commentData.map(function (e: {
          id: any
          comment: String
          datePublsih: any
          starsNbr: any

        }): any {
          return (
            <div className="Element__Container__Rate" key={e.id}>
              <Avatar value='MD' round={true} size='30px' style={{ marginLeft: '10px' }} />
              <div className="Input__Comment">
                <div className="Starts__Container">
                <Rating value={e.starsNbr} readOnly cancel={false} onIcon={<img src={getPublicImagePath('starFullLine.png')}   alt="" />} />
                </div>
                <div className="Comment_Container">
                  <div className="Comment__Text">
                    <h6>{e.datePublsih ? e.datePublsih.toString().slice(0, 10) : ''}</h6>
                    <p>{e.comment}</p>
                  </div>
                  <div className="Remove__Container">
                    <img src={getPublicImagePath('delete.png')}  onClick={() => handleRemoveComment(e.id)} />
                  </div>


                </div>

              </div>



            </div>

          )

        })




        : <div className="No__Comment">
          <img src={getPublicImagePath('noComment.png')} />
          <h3> {t("tNoComment")}  </h3>
        </div>}



    </div>
  )
}
