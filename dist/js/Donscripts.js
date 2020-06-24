
$(document).ready(function(){
        $(".add-rows").click(function(){
            var CN = $("#Clan_N").val();
            var i;
            var rd;
            if (CN) {
              for(i = 1 ; i <= CN ; i++) {

              rd = "<tr><td class=\"pt-3-half\" contenteditable=\"true\"></td><td class=\"pt-3-half\" contenteditable=\"true\"></td><td class=\"pt-3-half\" type=\'number\' contenteditable=\"true\"></td><td class=\"pt-3-half\" type=\'number\' contenteditable=\"true\"></td><td class=\"pt-3-half\" type=\'number\' contenteditable=\"true\"></td><td class=\"pt-3-half\" type=\'number\' contenteditable=\"true\"></td><td class=\"pt-3-half\" type=\'number\' contenteditable=\"true\"></td><td class=\"pt-3-half\" type=\'number\' contenteditable=\"true\"></td><td class=\"pt-3-half\" type=\'number\' contenteditable=\"false\"></td><td class=\"pt-3-half\" type=\'number\' contenteditable=\"false\"></td><td class=\"pt-3-half\" type=\'number\' contenteditable=\"false\"></td></tr>"
              $('#ScoringGrid tbody').append(rd);
              }
            }
            else{
              alert("Wa dkhl TAG w Smia dl clan aaa smitk !");
            }
            
        });
        


        $(".GetRes").click(function(){
          var table = $("#ScoringGrid tbody");
          var rowcount = $("#ScoringGrid tbody tr:last").index() + 1;
          if (rowcount > 1){
          var rankscores = [30,24,20,16,14,12,10,8,7,6,5,4,3,2,1,0,0,0]
            table.find('tr').each(function (i) {
            var tds = $(this).find('td');
            R1R = tds.eq(2).text();
            R1K = tds.eq(3).text();
            R2R = tds.eq(4).text();
            R2K = tds.eq(5).text();
            R3R = tds.eq(6).text();
            R3K = tds.eq(7).text();
            R1R_i = R1R-1;
            R2R_i = R2R-1;
            R3R_i = R3R-1;
            RP = rankscores[R1R_i] + rankscores[R2R_i] + rankscores[R3R_i];
            KP = parseInt(R1K) + parseInt(R2K) + parseInt(R3K);
            TP = parseInt(RP) + parseInt(KP);
            tds.eq(8).html(parseInt(KP))
            tds.eq(9).html(parseInt(RP))
            tds.eq(10).html(parseInt(TP))

    });
          }
          else{
            alert('Zid 3mmer tableau baraka mn tmergin')
          }
          });
        });