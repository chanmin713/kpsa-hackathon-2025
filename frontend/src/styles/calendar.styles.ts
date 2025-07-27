import styled from '@emotion/styled';

export const CalendarWrapper = styled.div`
  .react-calendar {
    border: none !important;
    box-shadow: none !important;
    background-color: transparent;
    width: 100%;
  }

  .react-calendar__tile {
    background-color: transparent;
    border: 1px solid #999;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    border-radius: 0.5rem;
    transition: background-color 0.2s, border-color 0.2s;
    color: #333;
  }

  .react-calendar__tile--now {
    background-color: #abbcf5ff; /* 예: 노란 배경 */
    border-color: #abbcf5ff;
    font-weight: bold;
    color: #000;
  }

  .react-calendar__month-view__days {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
