# React.js Learning Guide

## 📚 Giới thiệu

React.js là một thư viện JavaScript mã nguồn mở được phát triển bởi Facebook (Meta) để xây dựng giao diện người dùng (UI) hiện đại và tương tác. Với kiến trúc component-based và virtual DOM, React giúp phát triển ứng dụng web nhanh chóng, hiệu quả và dễ bảo trì.

### 🎯 Mục tiêu khóa học

Sau khi hoàn thành khóa học này, bạn sẽ có thể:

- Hiểu rõ các khái niệm cốt lõi của React
- Xây dựng các component tái sử dụng
- Quản lý state và props hiệu quả
- Sử dụng React Hooks một cách thành thạo
- Phát triển ứng dụng web tương tác hoàn chỉnh

## 🛠️ Cài đặt môi trường

### Yêu cầu hệ thống

- **Node.js**: >= 14.x
- **npm**: >= 6.x hoặc **Yarn**: >= 1.x
- **Editor**: Visual Studio Code (khuyên dùng)

### Các bước cài đặt

1. **Kiểm tra Node.js và npm**:

   ```bash
   node -v
   npm -v
   ```

2. **Tạo project React mới**:

   ```bash
   npx create-react-app ten-du-an
   cd ten-du-an
   npm start
   ```

3. **Truy cập ứng dụng**:
   Mở trình duyệt và truy cập `http://localhost:3000`

### Cấu trúc thư mục

```
my-react-app/
├── node_modules/          # Các thư viện dependencies
├── public/                # Tài nguyên tĩnh
│   ├── index.html        # File HTML gốc
│   └── favicon.ico       # Icon trang web
├── src/                   # Mã nguồn chính
│   ├── components/       # Thư mục chứa components
│   ├── App.js           # Component chính
│   ├── App.css          # Styles cho App
│   └── index.js         # Entry point
├── package.json          # Cấu hình project
└── README.md            # Tài liệu hướng dẫn
```

## 📖 Nội dung học

### Module 1: Cơ bản về React

- [ ] Giới thiệu React và Virtual DOM
- [ ] JSX - JavaScript XML
- [ ] Components và Props
- [ ] State và lifecycle methods

### Module 2: React Hooks

- [ ] useState - Quản lý state
- [ ] useEffect - Xử lý side effects
- [ ] useContext - Quản lý context
- [ ] Custom Hooks

### Module 3: Xử lý sự kiện và render

- [ ] Event handling trong React
- [ ] Conditional rendering
- [ ] Lists và Keys
- [ ] Forms và controlled components

### Module 4: Quản lý state nâng cao

- [ ] State lifting và prop drilling
- [ ] Context API
- [ ] useReducer hook
- [ ] State management patterns

### Module 5: Styling và UI

- [ ] CSS modules
- [ ] Styled-components
- [ ] UI component libraries
- [ ] Responsive design

## 🚀 Các lệnh thường dùng

```bash
# Chạy ứng dụng ở chế độ development
npm start

# Build ứng dụng cho production
npm run build

# Chạy test
npm test

# Eject cấu hình (không khuyên dùng)
npm run eject
```

## 🏗️ Dự án thực hành

### Dự án cơ bản

1. **Todo App** - Quản lý danh sách công việc
2. **Weather App** - Ứng dụng thời tiết
3. **Calculator** - Máy tính đơn giản

### Dự án nâng cao

1. **Blog Personal** - Blog cá nhân với CRUD
2. **E-commerce** - Trang thương mại điện tử
3. **Portfolio Website** - Trang web portfolio

## 📚 Tài liệu tham khảo

### Tài liệu chính thức

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Create React App](https://create-react-app.dev/)
- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)

### Tài liệu bổ sung

- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [React Router](https://reactrouter.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Video và khóa học

- [React Crash Course - Traversy Media](https://www.youtube.com/watch?v=w7ejDZ8SWv8)
- [Full Stack React - ITviec](https://itviec.com/blog/react-tutorial/)
- [React Developer Roadmap](https://roadmap.sh/react)

## 🔧 Extensions VS Code khuyên dùng

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-json",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

## 🤝 Góp ý & Hỗ trợ

### Khi gặp vấn đề

1. Kiểm tra console để xem lỗi
2. Tham khảo documentation chính thức
3. Tìm kiếm trên Stack Overflow
4. Tham gia cộng đồng React Vietnam

### Liên hệ hỗ trợ

- 📧 Email: [your-email@example.com]
- 💬 Discord: [React Learning Community]
- 🐛 Issues: [GitHub Issues]
- 📋 Project Management: [Trello/Jira Board]

## 📈 Lộ trình học tập

### Tuần 1-2: Cơ bản

- Cài đặt môi trường
- Tìm hiểu JSX và Components
- Thực hành với props và state

### Tuần 3-4: Hooks và State Management

- Học các hooks cơ bản
- Thực hành với useEffect
- Xây dựng Todo App

### Tuần 5-6: Routing và Forms

- React Router
- Form handling
- Validation

### Tuần 7-8: Dự án thực tế

- Xây dựng dự án hoàn chỉnh
- Deploy ứng dụng
- Code review và tối ưu

## 🏆 Chứng chỉ và đánh giá

- [ ] Hoàn thành tất cả bài tập
- [ ] Xây dựng ít nhất 2 dự án thực hành
- [ ] Tham gia code review
- [ ] Thực hiện bài kiểm tra cuối khóa

---

**Happy coding! 🚀**

> "The best way to learn React is by building real projects. Start small, think big, and never stop learning!"
