💰 Finance Dashboard

A modern, responsive finance dashboard built using React and Tailwind CSS.
It simulates real-world personal finance tracking with insights, charts, and categorized transactions.

🚀 Features
Dashboard with summary cards (Balance, Income, Expenses)
Time-based visualization (Spending Trend)
Categorical visualization (Spending Breakdown)
Transaction list with category-based filtering
Role-based UI (Viewer & Admin)
Insights (Highest spending, EMI load, Investments)
Responsive design with clean UI
Interactive hover animations for cards

⚖️ Technical Decisions and Trade-offs
Used Context API for global state management; avoided Redux to keep the architecture lightweight
Prioritized category-based filtering over search/sorting for better financial analysis
Focused on realistic mock data (salary, EMIs, subscriptions, investments)
Implemented insights to provide meaningful financial context rather than raw data
Chose a fixed dark theme for consistency and simplicity
Added subtle animations to improve user experience

🛠️ Tech Stack
React (Vite)
Tailwind CSS
Recharts
React Router
Lucide Icons

⚙️ Setup Instructions
# Clone repository
git clone https://github.com/aayushmyann/Finance-Dashboard.git

# Install dependencies
npm install

# Run development server
npm run dev

📌 Future Improvements
Add search and sorting
Add persistent storage (localStorage / backend)
Improve data visualization
Add authentication-based roles
Add a feature to switch between light modes

👤 Author
Ayushman Patro