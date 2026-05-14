import Link from "next/link";

export default function DatePage() {
  return (
    <div className="inner-container">
      <div className="calendar-container">
        {/* MAY */}
        <div className="calendar">
          <div className="month">May 2026</div>
          <div className="days">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div>
            <div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          <div className="dates">
            <div></div><div></div><div></div><div></div><div></div>
            <div>1</div><div>2</div>
            <div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div>
            <div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div><div>16</div>
            <div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div><div>23</div>
            <div>24</div><div>25</div><div>26</div><div>27</div><div>28</div><div>29</div><div>30</div>
            <div>31</div>
          </div>
        </div>

        {/* JUNE */}
        <div className="calendar">
          <div className="month">June 2026</div>
          <div className="days">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div>
            <div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          <div className="dates">
            <div></div>
            <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
            <div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div>13</div>
            <div>14</div><div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div>
            <div>21</div><div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div>
            <div>28</div><div>29</div><div>30</div>
          </div>
        </div>
      </div>
      <Link href="/time">
        <button className="quick-btn yellow-btn">Next</button>
      </Link>
    </div>
  );
}
