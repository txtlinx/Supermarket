export default function About() {
    return (
      <div className="about-layout">
        <div>
          <h1>About Us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            <br />
            
<br />
            <em></em>
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/demo/image/upload/$img_current:public_id,$bw_120/l_$img,c_crop,w_w,h_$bw,g_north,e_colorize:30,co_white/fl_layer_apply,g_north/l_$img,c_crop,w_w,h_$bw,g_south,e_colorize:50,co_black/fl_layer_apply,g_south/l_$img,c_crop,h_h,w_$bw,g_west,e_colorize:15,co_white/l_triangle,w_$bw,a_-90/e_cut_out,fl_layer_apply,g_north_west/l_triangle,w_$bw/e_cut_out,fl_layer_apply,g_south_west/fl_layer_apply,g_west/l_$img,c_crop,h_h,w_$bw,g_east,e_colorize:30,co_black/l_triangle,w_$bw,a_180/e_cut_out,fl_layer_apply,g_north_east/l_triangle,w_$bw,a_90/e_cut_out,fl_layer_apply,g_south_east/fl_layer_apply,g_east/three-dogs.jpg"
          height="400"
          width="600"
          className="rounded"
          alt=""
        />
          {document.title ="Abous Us"}
      </div>
    );
  }
  