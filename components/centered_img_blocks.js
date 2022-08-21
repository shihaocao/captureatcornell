import styles from './layout.module.css'

function conditional_subtitle(subtitle = ""){
  return (
      subtitle != "" ? 
      (
      <center><p><i>{subtitle}</i></p></center>
      ) : (
      <></>
      )
  )
}

export function triple_centered_img_block(p_l, p_m, p_r,
  {l_subtitle = "", m_subtitle = "", r_subtitle = ""} = {}) {
  return (<div class="container">
          <div class="row">
            <div class="col my-auto">
              <img
              src = {'/images/' + p_l}
              alt = ''
              loading="lazy"
              />
            </div>
            <div class="col my-auto">
            <img
              src = {'/images/' + p_m}
              alt = ''
              loading="lazy"
              />
            </div>
            <div class="col my-auto">
            <img
              src = {'/images/' + p_r}
              alt = ''
              loading="lazy"
              />
            </div>
          </div>
          <div class="row">
          <div class="col my-auto">
          {conditional_subtitle(l_subtitle)}
          </div>
          <div class="col my-auto">
          {conditional_subtitle(m_subtitle)}
          </div>
          <div class="col my-auto">
          {conditional_subtitle(r_subtitle)}
          </div>
          </div>
      </div>)
}

export function dual_centered_img_block(photo_path_left, photo_path_right,
                                       {l_subtitle = "", r_subtitle = ""} = {}) {
    return (
      <div class="container">
      <div class="row">
        <div class="col my-auto">
        <img
          src = {'/images/' + photo_path_left}
          alt = ''
          loading="lazy"
          />
        </div>
        <div class="col my-auto">
        <img
          src = {'/images/' + photo_path_right}
          alt = ''
          loading="lazy"
          />
        </div>
      </div>
      <div class="row">
      <div class="col my-auto">
      {conditional_subtitle(l_subtitle)}
      </div>
      <div class="col my-auto">
      {conditional_subtitle(r_subtitle)}
      </div>
      </div>
    </div>
    )
  }
  
  export function centered_img_block(photo_path, {subtitle = ""} = {}) {
    return (
      <div class={styles.containerSm}>
      <div class="row">
        <div class="col-sm">
        <img
          src = {'/images/' + photo_path}
          alt = ''
          loading="lazy"
          />
          {conditional_subtitle(subtitle)}
        </div>
      </div>
    </div>
    )
  }