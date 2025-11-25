import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigationItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'administration', label: 'Администрация', icon: 'Users' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'documents', label: 'Документы', icon: 'FileText' },
    { id: 'services', label: 'Услуги', icon: 'Briefcase' },
    { id: 'reception', label: 'Интернет-приемная', icon: 'MessageSquare' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' },
    { id: 'anticorruption', label: 'Противодействие коррупции', icon: 'Shield' },
  ];

  const newsItems = [
    { id: 1, date: '20.11.2025', title: 'Заседание администрации муниципального образования', category: 'События' },
    { id: 2, date: '18.11.2025', title: 'Объявлен конкурс на благоустройство территории', category: 'Объявления' },
    { id: 3, date: '15.11.2025', title: 'Отчет о работе за III квартал 2025 года', category: 'Отчеты' },
  ];

  const servicesItems = [
    { id: 1, title: 'Получение справок', icon: 'FileCheck' },
    { id: 2, title: 'Запись на прием', icon: 'Calendar' },
    { id: 3, title: 'Подача заявлений', icon: 'Send' },
    { id: 4, title: 'Консультации', icon: 'MessageCircle' },
  ];

  const queueItems = [
    { id: 1, number: 'A001', service: 'Получение справки', status: 'В обработке', time: '10:30' },
    { id: 2, number: 'A002', service: 'Консультация', status: 'Ожидание', time: '11:00' },
    { id: 3, number: 'A003', service: 'Подача заявления', status: 'Завершено', time: '09:45' },
  ];

  const renderMainSection = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white p-12 rounded-lg overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <img src="https://cdn.poehali.dev/projects/8a640f11-3c41-4970-8255-e873708142af/files/c87a234d-9bc8-4c0a-bdbb-43cc61a69bd5.jpg" alt="Герб" className="w-full h-full object-contain" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <img src="https://cdn.poehali.dev/projects/8a640f11-3c41-4970-8255-e873708142af/files/c87a234d-9bc8-4c0a-bdbb-43cc61a69bd5.jpg" alt="Герб" className="w-20 h-20 object-contain" />
            <div>
              <h1 className="text-4xl font-bold mb-2">Администрация муниципального образования</h1>
              <p className="text-xl opacity-90">Официальный портал</p>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <Button variant="secondary" size="lg" onClick={() => setActiveSection('reception')}>
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Интернет-приемная
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на прием
            </Button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover-scale">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Icon name="Users" size={24} className="text-primary" />
            </div>
            <CardTitle>Администрация</CardTitle>
            <CardDescription>Структура органов власти</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="p-0" onClick={() => setActiveSection('administration')}>
              Подробнее →
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Icon name="Briefcase" size={24} className="text-primary" />
            </div>
            <CardTitle>Услуги</CardTitle>
            <CardDescription>Государственные и муниципальные услуги</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="p-0" onClick={() => setActiveSection('services')}>
              Подробнее →
            </Button>
          </CardContent>
        </Card>

        <Card className="hover-scale">
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
              <Icon name="FileText" size={24} className="text-primary" />
            </div>
            <CardTitle>Документы</CardTitle>
            <CardDescription>Нормативные акты и постановления</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="link" className="p-0" onClick={() => setActiveSection('documents')}>
              Подробнее →
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Newspaper" size={24} />
            Новости
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsItems.map(item => (
              <div key={item.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                <div className="text-sm text-muted-foreground min-w-[100px]">{item.date}</div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <Badge variant="outline">{item.category}</Badge>
                </div>
                <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderReceptionSection = () => (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="MessageSquare" size={24} />
            Интернет-приемная
          </CardTitle>
          <CardDescription>
            Электронная очередь, видеоконсультации и личный кабинет для взаимодействия с органами власти
          </CardDescription>
        </CardHeader>
      </Card>

      {!isLoggedIn ? (
        <Card>
          <CardHeader>
            <CardTitle>Вход в личный кабинет</CardTitle>
            <CardDescription>Для доступа ко всем функциям необходима авторизация</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login">Логин или СНИЛС</Label>
              <Input id="login" placeholder="Введите логин" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input id="password" type="password" placeholder="Введите пароль" />
            </div>
            <div className="flex gap-4">
              <Button className="flex-1" onClick={() => setIsLoggedIn(true)}>
                <Icon name="LogIn" size={20} className="mr-2" />
                Войти
              </Button>
              <Button variant="outline" className="flex-1">
                Вход через Госуслуги
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Tabs defaultValue="cabinet" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="cabinet">
              <Icon name="User" size={16} className="mr-2" />
              Личный кабинет
            </TabsTrigger>
            <TabsTrigger value="queue">
              <Icon name="Clock" size={16} className="mr-2" />
              Электронная очередь
            </TabsTrigger>
            <TabsTrigger value="video">
              <Icon name="Video" size={16} className="mr-2" />
              Видеоконсультации
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cabinet" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Мои обращения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">Обращение №12345</h4>
                      <p className="text-sm text-muted-foreground">Вопрос о благоустройстве</p>
                    </div>
                    <Badge>На рассмотрении</Badge>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Icon name="Plus" size={20} className="mr-2" />
                        Создать новое обращение
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Новое обращение</DialogTitle>
                        <DialogDescription>
                          Заполните форму для отправки обращения в администрацию
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="theme">Тема обращения</Label>
                          <Input id="theme" placeholder="Введите тему" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Текст обращения</Label>
                          <Textarea id="message" placeholder="Опишите вашу ситуацию" rows={5} />
                        </div>
                        <Button className="w-full">
                          <Icon name="Send" size={20} className="mr-2" />
                          Отправить обращение
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="queue" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Электронная очередь</CardTitle>
                <CardDescription>Запишитесь на прием без необходимости личного присутствия</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  {servicesItems.map(service => (
                    <Card key={service.id} className="hover-scale cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name={service.icon as any} size={20} className="text-primary" />
                          </div>
                          <CardTitle className="text-base">{service.title}</CardTitle>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <Card className="bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Текущая очередь</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {queueItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-background rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="text-2xl font-bold text-primary">{item.number}</div>
                            <div>
                              <div className="font-semibold">{item.service}</div>
                              <div className="text-sm text-muted-foreground">{item.time}</div>
                            </div>
                          </div>
                          <Badge variant={item.status === 'Завершено' ? 'default' : 'outline'}>
                            {item.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="video" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Видеоконсультации</CardTitle>
                <CardDescription>
                  Получите консультацию специалиста в режиме онлайн
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-lg p-8 text-center">
                  <Icon name="Video" size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">Запланируйте видеоконсультацию</h3>
                  <p className="text-muted-foreground mb-4">
                    Выберите удобное время для онлайн-встречи со специалистом
                  </p>
                  <div className="space-y-2 max-w-md mx-auto">
                    <div className="space-y-2">
                      <Label htmlFor="department">Выберите отдел</Label>
                      <Input id="department" placeholder="Например: Отдел ЖКХ" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата и время</Label>
                      <Input id="date" type="datetime-local" />
                    </div>
                    <Button className="w-full">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться на консультацию
                    </Button>
                  </div>
                </div>

                <Card className="border-accent/20 bg-accent/5">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="Clock" size={20} />
                      Ближайшие консультации
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">У вас пока нет запланированных консультаций</p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );

  const renderOtherSection = (title: string, icon: string) => (
    <div className="space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name={icon as any} size={24} />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Раздел находится в разработке</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'main':
        return renderMainSection();
      case 'reception':
        return renderReceptionSection();
      case 'administration':
        return renderOtherSection('Администрация', 'Users');
      case 'news':
        return renderOtherSection('Новости', 'Newspaper');
      case 'documents':
        return renderOtherSection('Документы', 'FileText');
      case 'services':
        return renderOtherSection('Услуги', 'Briefcase');
      case 'contacts':
        return renderOtherSection('Контакты', 'Phone');
      case 'anticorruption':
        return renderOtherSection('Противодействие коррупции', 'Shield');
      default:
        return renderMainSection();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveSection('main')}>
              <img src="https://cdn.poehali.dev/projects/8a640f11-3c41-4970-8255-e873708142af/files/c87a234d-9bc8-4c0a-bdbb-43cc61a69bd5.jpg" alt="Герб" className="w-12 h-12 object-contain" />
              <div>
                <div className="font-bold text-lg">Администрация МО</div>
                <div className="text-xs opacity-80">Официальный портал</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Icon name="Search" size={18} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Icon name="Eye" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-white border-b sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {navigationItems.map(item => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(item.id)}
                className="whitespace-nowrap"
              >
                <Icon name={item.icon as any} size={16} className="mr-2" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>

      <footer className="bg-primary text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">О портале</h3>
              <p className="text-sm opacity-80">
                Официальный сайт администрации муниципального образования
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm opacity-80">
                <div>Телефон: 8 (800) 000-00-00</div>
                <div>Email: info@admn.ru</div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">График работы</h3>
              <div className="text-sm opacity-80">
                <div>Пн-Чт: 9:00 - 18:00</div>
                <div>Пт: 9:00 - 17:00</div>
                <div>Сб-Вс: выходной</div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Полезные ссылки</h3>
              <div className="space-y-2 text-sm opacity-80">
                <div>Госуслуги</div>
                <div>Открытые данные</div>
                <div>Карта сайта</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center opacity-80">
            © 2025 Администрация муниципального образования. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
