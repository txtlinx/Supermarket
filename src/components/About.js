export default function About() {
    return (
      <div className="about-layout">
        <div>
          <h1>About Us</h1>
          <p>site of test bla bla
            <br />
            this site is test
<br />
            <em>test</em>
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/demo/image/upload/$img_current:public_id,$bw_120/l_$img,c_crop,w_w,h_$bw,g_north,e_colorize:30,co_white/fl_layer_apply,g_north/l_$img,c_crop,w_w,h_$bw,g_south,e_colorize:50,co_black/fl_layer_apply,g_south/l_$img,c_crop,h_h,w_$bw,g_west,e_colorize:15,co_white/l_triangle,w_$bw,a_-90/e_cut_out,fl_layer_apply,g_north_west/l_triangle,w_$bw/e_cut_out,fl_layer_apply,g_south_west/fl_layer_apply,g_west/l_$img,c_crop,h_h,w_$bw,g_east,e_colorize:30,co_black/l_triangle,w_$bw,a_180/e_cut_out,fl_layer_apply,g_north_east/l_triangle,w_$bw,a_90/e_cut_out,fl_layer_apply,g_south_east/fl_layer_apply,g_east/three-dogs.jpg"
          height="400"
          width="600"
          className="rounded"
          alt=""
        />
      </div>
    );
  }
  