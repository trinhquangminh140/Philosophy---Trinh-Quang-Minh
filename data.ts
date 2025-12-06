import { Course } from './types';

export const COURSE_DATA: Course = {
  title: "Triết học Mác–Lênin (Toolkit)",
  credits: 4,
  duration_sessions: 10,
  syllabus_notes: "Cấu trúc 8 chương: Khái luận; Bản thể luận (vật chất); Phép biện chứng; Nhận thức luận; Học thuyết hình thái kinh tế–xã hội; Triết học chính trị; Ý thức xã hội; Triết học về con người.",
  references: ["turn1search1", "turn1search3", "turn1search2"],
  chapters: [
    {
      id: "CH1",
      title: "Khái luận về Triết học",
      sections: [
        {
          id: "CH1.S1",
          title: "Khái niệm, chức năng",
          concepts: [
            {
              key: "khainiem_triet_hoc",
              title: "Triết học là gì?",
              summary: "Triết học (philosophia: yêu mến sự thông thái) là hệ thống quan điểm lý luận chung nhất về thế giới, con người và tư duy; là hạt nhân của thế giới quan. Chức năng: (i) Thế giới quan; (ii) Phương pháp luận.",
              tags: ["khái luận", "thế giới quan", "phương pháp luận"],
              references: ["turn1search2"]
            },
            {
              key: "van_de_co_ban",
              title: "Vấn đề cơ bản của triết học",
              summary: "Quan hệ giữa vật chất (tồn tại) và ý thức (tư duy), và khả năng nhận thức thế giới khách quan của con người.",
              tags: ["vật chất", "ý thức", "khả tri"],
              references: ["turn1search2"]
            }
          ]
        }
      ]
    },
    {
      id: "CH2",
      title: "Bản thể luận (Vật chất)",
      sections: [
        {
          id: "CH2.S1",
          title: "Vật chất, vận động, không gian–thời gian",
          concepts: [
            {
              key: "vat_chat_lenin",
              title: "Định nghĩa Vật chất (Lênin)",
              summary: "Vật chất là phạm trù triết học chỉ thực tại khách quan được đem lại cho con người trong cảm giác, được cảm giác chép lại, chụp lại, phản ánh; tồn tại không phụ thuộc vào cảm giác.",
              tags: ["vật chất", "Lênin", "khách quan"],
              references: ["turn1search2"]
            },
            {
              key: "van_dong_kg_tg",
              title: "Vận động, không gian, thời gian",
              summary: "Vận động là phương thức tồn tại của vật chất; không gian và thời gian là hình thức tồn tại cơ bản của vật chất.",
              tags: ["vận động", "không gian", "thời gian"],
              references: ["turn1search2"]
            }
          ]
        }
      ]
    },
    {
      id: "CH3",
      title: "Phép biện chứng duy vật",
      sections: [
        {
          id: "CH3.S1",
          title: "Nguyên lý và quy luật",
          concepts: [
            {
              key: "nguyen_ly_lien_he_pho_bien",
              title: "Nguyên lý về mối liên hệ phổ biến",
              summary: "Mọi sự vật, hiện tượng đều tồn tại trong mối liên hệ, tác động qua lại; yêu cầu quan điểm toàn diện khi nhận thức và hành động.",
              tags: ["biện chứng", "liên hệ", "toàn diện"],
              references: ["turn1search1", "turn1search3"]
            },
            {
              key: "nguyen_ly_phat_trien",
              title: "Nguyên lý về sự phát triển",
              summary: "Sự vật luôn vận động, biến đổi, phát triển theo khuynh hướng đi lên; cái mới ra đời thay thế cái cũ trên cơ sở kế thừa.",
              tags: ["phát triển", "kế thừa", "cái mới"],
              references: ["turn1search1", "turn1search3"]
            },
            {
              key: "ql_luong_chat",
              title: "Quy luật Lượng–Chất",
              summary: "Tích luỹ biến đổi về lượng đến điểm nút dẫn tới biến đổi về chất; các khái niệm Độ–Điểm nút–Bước nhảy.",
              tags: ["quy luật", "lượng", "chất", "điểm nút", "bước nhảy"],
              references: ["turn1search1", "turn1search3"]
            },
            {
              key: "ql_mau_thuan",
              title: "Quy luật Thống nhất và đấu tranh của các mặt đối lập",
              summary: "Mâu thuẫn là nguồn gốc, động lực của phát triển: thống nhất (ràng buộc) và đấu tranh (xung đột) giữa các mặt đối lập.",
              tags: ["mâu thuẫn", "đối lập", "động lực"],
              references: ["turn1search1", "turn1search3"]
            },
            {
              key: "ql_phu_dinh",
              title: "Quy luật Phủ định của phủ định",
              summary: "Phủ định biện chứng mang tính khách quan và kế thừa; khuynh hướng tiến lên theo đường xoáy ốc.",
              tags: ["phủ định", "kế thừa", "xoáy ốc"],
              references: ["turn1search1", "turn1search3"]
            }
          ]
        },
        {
          id: "CH3.S2",
          title: "Cặp phạm trù tiêu biểu",
          concepts: [
            {
              key: "cap_chung_rieng",
              title: "Cái chung và cái riêng",
              summary: "Cái chung chỉ tồn tại trong cái riêng và qua cái riêng mà biểu hiện; chúng chuyển hoá lẫn nhau trong phát triển.",
              tags: ["phạm trù", "cái chung", "cái riêng"],
              references: ["turn1search1", "turn1search3"]
            },
            {
              key: "ban_chat_hien_tuong",
              title: "Bản chất và hiện tượng",
              summary: "Bản chất là mối liên hệ tất nhiên, ổn định bên trong sự vật; hiện tượng là biểu hiện bề ngoài và có thể che giấu bản chất.",
              tags: ["bản chất", "hiện tượng"],
              references: ["turn1search1", "turn1search3"]
            },
            {
              key: "nguyen_nhan_ket_qua",
              title: "Nguyên nhân và kết quả",
              summary: "Nguyên nhân sinh ra kết quả, nhưng kết quả cũng tác động trở lại nguyên nhân; một nguyên nhân có thể dẫn đến nhiều kết quả và ngược lại.",
              tags: ["nguyên nhân", "kết quả"],
              references: ["turn1search1", "turn1search3"]
            },
            {
              key: "tat_nhien_ngau_nhien",
              title: "Tất nhiên và ngẫu nhiên",
              summary: "Tất nhiên do nguyên nhân bên trong, ngẫu nhiên do nguyên nhân bên ngoài; ngẫu nhiên là hình thức biểu hiện của tất nhiên.",
              tags: ["tất nhiên", "ngẫu nhiên"],
              references: ["turn1search1", "turn1search3"]
            },
            {
              key: "noi_dung_hinh_thuc",
              title: "Nội dung và hình thức",
              summary: "Nội dung quyết định hình thức, song hình thức có tính độc lập tương đối và tác động trở lại nội dung.",
              tags: ["nội dung", "hình thức"],
              references: ["turn1search1", "turn1search3"]
            },
            {
              key: "kha_nang_hien_thuc",
              title: "Khả năng và hiện thực",
              summary: "Khả năng chuyển thành hiện thực khi có điều kiện thích hợp; hiện thực chứa đựng khả năng mới.",
              tags: ["khả năng", "hiện thực", "điều kiện"],
              references: ["turn1search1", "turn1search3"]
            }
          ]
        }
      ]
    },
    {
      id: "CH4",
      title: "Nhận thức luận",
      sections: [
        {
          id: "CH4.S1",
          title: "Con đường biện chứng của nhận thức",
          concepts: [
            {
              key: "con_duong_nhan_thuc",
              title: "Từ trực quan sinh động → tư duy trừu tượng → thực tiễn",
              summary: "Nhận thức vận động không ngừng: từ cảm tính (cảm giác–tri giác–biểu tượng) tới lý tính (khái niệm–phán đoán–suy luận) và quay về thực tiễn để kiểm nghiệm chân lý.",
              tags: ["nhận thức", "thực tiễn", "chân lý"],
              references: ["turn1search2"]
            },
            {
              key: "vai_tro_thuc_tien",
              title: "Vai trò của thực tiễn",
              summary: "Thực tiễn là cơ sở, mục đích và tiêu chuẩn của chân lý.",
              tags: ["thực tiễn", "chân lý"],
              references: ["turn1search2"]
            }
          ]
        }
      ]
    },
    {
      id: "CH5",
      title: "Học thuyết hình thái kinh tế–xã hội",
      sections: [
        {
          id: "CH5.S1",
          title: "Cấu trúc & quy luật vận động",
          concepts: [
            {
              key: "cau_truc_htktxh",
              title: "Cấu trúc HTKT–XH",
              summary: "Cơ sở hạ tầng (quan hệ sản xuất) quyết định kiến trúc thượng tầng (chính trị–pháp luật–ý thức xã hội), đồng thời KTTT tác động trở lại CSHT.",
              tags: ["cơ sở hạ tầng", "kiến trúc thượng tầng", "quan hệ sản xuất"],
              references: ["turn1search2"]
            },
            {
              key: "llsx_qhsx",
              title: "Biện chứng LLSX–QHSX",
              summary: "Quan hệ sản xuất phải phù hợp với trình độ phát triển của lực lượng sản xuất; mâu thuẫn là động lực cải biến xã hội.",
              tags: ["LLSX", "QHSX", "mâu thuẫn"],
              references: ["turn1search2"]
            }
          ]
        }
      ]
    },
    {
      id: "CH6",
      title: "Triết học chính trị",
      sections: [
        {
          id: "CH6.S1",
          title: "Nhà nước, đảng phái, pháp luật",
          concepts: [
            {
              key: "nha_nuoc",
              title: "Nhà nước & chức năng",
              summary: "Nhà nước là thiết chế quyền lực trung tâm, có chức năng chuyên chính và xã hội; phản ánh mối quan hệ giai cấp.",
              tags: ["nhà nước", "chức năng", "giai cấp"],
              references: ["turn1search2"]
            },
            {
              key: "phap_luat",
              title: "Pháp luật & vai trò",
              summary: "Hệ quy tắc do nhà nước ban hành để quản lý xã hội và điều tiết kinh tế; thể hiện ý chí giai cấp thống trị.",
              tags: ["pháp luật", "điều tiết", "quản lý"],
              references: ["turn1search2"]
            }
          ]
        }
      ]
    },
    {
      id: "CH7",
      title: "Ý thức xã hội",
      sections: [
        {
          id: "CH7.S1",
          title: "Quan hệ TTXH–YTXH & tính độc lập tương đối",
          concepts: [
            {
              key: "ttxh_qd_ytxh",
              title: "Tồn tại xã hội quyết định ý thức xã hội",
              summary: "Ý thức xã hội phản ánh tồn tại xã hội, chịu chi phối bởi phương thức sản xuất; nhưng có tính độc lập tương đối (lạc hậu, vượt trước, kế thừa, tác động trở lại).",
              tags: ["TTXH", "YTXH", "độc lập tương đối"],
              references: ["turn1search2"]
            }
          ]
        }
      ]
    },
    {
      id: "CH8",
      title: "Con người",
      sections: [
        {
          id: "CH8.S1",
          title: "Bản chất & phát huy nhân tố con người",
          concepts: [
            {
              key: "ban_chat_con_nguoi",
              title: "Bản chất con người (Marx)",
              summary: "Bản chất con người là tổng hoà các quan hệ xã hội; con người vừa là chủ thể sáng tạo lịch sử, vừa là sản phẩm của lịch sử.",
              tags: ["bản chất", "quan hệ xã hội", "lịch sử"],
              references: ["turn1search2"]
            },
            {
              key: "nhan_van_hcm",
              title: "Tư tưởng nhân văn Hồ Chí Minh",
              summary: "Lấy dân làm gốc; giải phóng và phát triển con người toàn diện; chính sách phải hướng tới hạnh phúc nhân dân.",
              tags: ["Hồ Chí Minh", "nhân văn", "dân", "phát triển con người"],
              references: ["turn1search2"]
            }
          ]
        }
      ]
    }
  ]
};
