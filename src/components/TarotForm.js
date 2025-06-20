import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import './TarotForm.css'; // 假設您會建立對應的 CSS 檔案

const TarotForm = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // 表單驗證結構
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('validation.nameRequired')),
    topic: Yup.string().required(t('validation.topicRequired')),
    cardCount: Yup.number().required(t('validation.cardCountRequired'))
  });

  // 表單初始值
  const initialValues = {
    name: '',
    topic: '',
    cardCount: 3 // 預設為 3 張牌
  };

  // 表單提交處理
  const handleSubmit = (values) => {
    navigate('/draw', { state: values });
  };

  return (
    <div className="tarot-form-container">
      <h2>{t('form.title')}</h2>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="tarot-form">
            <div className="form-group">
              <label htmlFor="name">{t('form.name')}</label>
              <Field type="text" id="name" name="name" placeholder={t('form.namePlaceholder')} />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="topic">{t('form.topic')}</label>
              <Field type="text" id="topic" name="topic" placeholder={t('form.topicPlaceholder')} />
              <ErrorMessage name="topic" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label>{t('form.cardCount')}</label>
              <div className="card-count-options">
                <label>
                  <Field type="radio" name="cardCount" value={1} />
                  1 {t('form.card')}
                </label>
                <label>
                  <Field type="radio" name="cardCount" value={3} />
                  3 {t('form.cards')}
                </label>
                <label>
                  <Field type="radio" name="cardCount" value={6} />
                  6 {t('form.cards')}
                </label>
              </div>
              <ErrorMessage name="cardCount" component="div" className="error-message" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('form.submitting') : t('form.submit')}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TarotForm;