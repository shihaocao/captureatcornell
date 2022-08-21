const neg_margin = -5

export function img_photo_descrip_block(title, descript, src, alt) {
    return (
      <div>
      <h3 style={{marginBottom: neg_margin}}>{title}</h3>
      <p>{descript}</p>
      <div className='photo-div'>
      {/* <Image src="/photography/jumping.jpg" alt="me" width="4000" height="600" /> */}
      <img
        src = {src}
        alt = {alt}
        layout='fill'
        objectFit='contain'
        loading="lazy"
      />
      </div>
      <hr></hr>
      </div>
      
    )
  }
  
export function img_photo_descrip_block_h2(title, descript, src, alt) {
    return (
      <div>
      <h2 style={{marginBottom: neg_margin}}>{title}</h2>
      <p>{descript}</p>
      <div className='photo-div'>
      <div style={{margin: 0, textAlign: 'center', display: 'block'}}>
      <img
        src = {src}
        alt = {alt}
        layout = 'fill'
        objectFit='contain'
        loading="lazy"
      />
      </div>
      </div>

      <hr></hr>
      </div>
      
    )
}